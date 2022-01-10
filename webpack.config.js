const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}