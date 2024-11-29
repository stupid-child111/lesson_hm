// 确保安装了所需的库
// npm install request cheerio csv-writer

const request = require('request');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 目标URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送HTTP请求获取网页内容
request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        // 使用cheerio加载HTML
        const $ = cheerio.load(html);

        // 定义CSV写入器
        const csvWriter = createCsvWriter({
            path: 'weibo_hot_topics.csv',
            header: [
                { id: 'rank', title: 'Rank' },
                { id: 'title', title: 'Title' },
                { id: 'heat', title: 'Heat' },
                { id: 'link', title: 'Link' }
            ]
        });

        // 存储热榜数据的数组
        const hotTopics = [];

        // 解析表格中的数据
        $('table tr').each((index, element) => {
            if (index > 0) { // 跳过表头
                const rank = $(element).find('td:nth-child(1)').text().trim();
                const title = $(element).find('td:nth-child(2) a').text().trim();
                const heat = $(element).find('td:nth-child(3)').text().trim();
                const link = 'https://tophub.today' + $(element).find('td:nth-child(2) a').attr('href');

                // 将数据添加到数组中
                hotTopics.push({ rank, title, heat, link });
            }
        });

        // 将数据写入CSV文件
        csvWriter.writeRecords(hotTopics)
            .then(() => {
                console.log('CSV文件已成功写入');
            });
    } else {
        console.error('请求失败:', error);
    }
});