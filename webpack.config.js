import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export const config = {
 mode: "development", // or 'production'
 entry: "./src/index.js",
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
     },
    },
   }
  ],
 },
 plugins: [new BundleAnalyzerPlugin()],
};