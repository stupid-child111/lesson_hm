// requsest-promise 负责发送请求
//import request from ''
//node 早期的 commonjs 模块化
const request = require('request-promise');
//解析request 拿到的字符串
const cheerio = require('cheerio')
const createCsvwriter = require('csv-writer').createObjectCsvWriter
//常量 大写  配置项
const HOT_URL = 'https://tophub.today/n/KqndgxeLl9';

request(HOT_URL)
    //network http 请求
    .then(html => {
        //请求完成
        //console.log(html);
        //解析html 得到热榜
        //获取到 html 字符串 --> tr
        //内存里模拟浏览器   cheerio
        const $ = cheerio.load(html);
        const hotList = [];
        $('.jc table tr').each((index, element) => {
            //console.log(index,element);
            //${node}.find(querySelector)
            const rank =
                $(element).find('td:nth-child(2)').text().trim()

            const heat =
                $(element).find('td:nth-child(2)').text().trim()

            const link =
                $(element).find('td:nth-child(2) a').attr('href').trim()

            const title =
                $(element).find('td:nth-child(2)').text().trim()
            // console.log(title);
            hotList.push({
                rank,
                title,
                heat,
                link
            })
        })
        const csvWriter = createCsvwriter({
            path: 'hot_list2.csv',
            header: [
                { id: 'rank', title: '排序' },
                { id: 'title', title: '标题' },
                { id: 'heat', title: '热度' },
                { id: 'link', title: '链接' },
            ]
        })
        csvWriter
            .writeRecords(hotList)
            .then(() => console.log('CSV file has been saved.'))
    })