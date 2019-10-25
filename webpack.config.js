module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path:__dirname + "/dist"
    },
    devServer: {
        // サーバーの基底パスを記述    
        contentBase: './dist',
        
        open: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test:/\.jpg/,
                loader:"url-loader"
            }
        ]
    }
}