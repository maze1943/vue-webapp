module.exports = {
    entry: './app/Main.js',//打包入口文件
    output: {
        path: __dirname + '/dist',//文件输出目录
        filename: 'bundle.js'//输出文件名
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',//ES6--->ES5
                    options:{
                        presets:['@babel/preset-env']//预设项及转换规范
                    }
                }
            }
        ]
    },
    devServer: {//webpack-dev-server运行配置
        open:true,//自动打开浏览器
        port:9000,//默认端口
        host:'127.0.0.1'//默认ip
    }
}