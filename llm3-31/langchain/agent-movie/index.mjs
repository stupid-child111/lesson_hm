import { ChatOpenAI } from '@langchain/openai';
// agent 模块
// agent 自动化
// 电影智能体  + 订票智能体

// 智能体执行器
// import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
//fileloader  文件加载器

//urlloader  网页加载器
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio';
import { DynamicTool } from 'langchain/tools';
import { config } from 'dotenv';
config();

async function main(){
    const model = new ChatOpenAI({
        //智能体要求高
        modelName: 'gpt-4o',//多模态 
        temperature: 0,
        apiKey: process.env.OPENAI_API_KEY, 
        baseURL: process.env.OPENAI_BASE_URL,  
    })

    
    const scrapingTool = new DynamicTool({//动态工具  网页加载器  网页内容
        name: 'WebScraper',//工具名称
        description: 'Scrapes movie information from a given URL.',//工具描述
        func: async (url) => {
            // console.log(url);
            try{
                const loader = new CheerioWebBaseLoader(url,{
                    selector:"tr.item"//<tr class="item">  电影信息
                });//网页加载器  网页内容
                const docs = await loader.load();//加载网页内容
                return docs[0].pageContent;//返回网页内容
            } catch(err){
                return `Error scraping the website:${err.message}`; 
            }
        }
    })
    const executor = await initializeAgentExecutorWithOptions(
        [scrapingTool],//执行工具
        model,
        {
            //0 样本
            agentType: 'zero-shot-react-description',//智能体类型
            verbose: true,//是否打印日志
        }
    )

    const result = await executor.call({
        input: 'https://movie.douban.com/chart 找出中国电影',//输入问题
    })
    console.log(result);//打印结果

}

main()
  .catch(console.error)