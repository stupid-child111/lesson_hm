const path = require('path');
const { Static } = require('vue');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        //虚拟打包路径，文件夹不会真正生成，而是在服务器内存8080端口中虚拟生成
        //不在磁盘生成，而是在内存中生成
        publicPath: '/xuni/',
        //打包生成的文件存放目录
        filename: 'bundle.js',
    },
    devServer: {
        //端口号
        port: 8080,
        //静态文件根目录
        static: 'www'
    }
};