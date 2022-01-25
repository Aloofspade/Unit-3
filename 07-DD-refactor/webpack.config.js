
const path = require('path');

module.export = {
    //! exports to a js with comments 
    mode: "development",
    //! creates a minified version 
    // mode: "production",

    //! where the file that we are compiling is 
    entry: "../src/app.ts",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        //! if you are a running the webpack server this is where file will be 
        publicPath: "dist"
    },

    devtool: "inline-source-map",
    module: {
        rules: [
            {
                //! tells the complier how to deal with ts files 
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
        resolve: {
            //! default only runs on js files 
            extensions: [".ts", ".js"]
        }
}