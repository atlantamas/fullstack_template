import path from "path"

export default {
    entry: ["./src/index.mjs"],
    output:
    {
        filename: "webpack_bundle.mjs",
        path: path.resolve("./public/")
    },
    cache: false,
    devtool: "source-map",
    experiments:
    {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    options:
                    {
                        presets: ["@babel/preset-react"]
                    }
                }
            }
        ]
    }
}