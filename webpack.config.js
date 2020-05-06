module.exports = {
    entry: './src/main.js',//打包入口文件
    output: {
        path: __dirname + '/dist',//文件输出目录
        filename: 'bundle.js'//输出文件名
    },
    module: {//配置loader规则
        rules: [
            {//字体
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {//js使用babel
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {//css
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {//less
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {//样式表中的图片路径
                test:/\.png|\.jpg|\.gif|\.bmp$/,
                use:'url-loader'
            }
        ]
    },
    devServer: {//webpack-dev-server运行配置
        open:true,//自动打开浏览器
        port:9000,//默认端口
        host:'127.0.0.1'//默认ip
    }
}