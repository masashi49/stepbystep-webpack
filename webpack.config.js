module.exports = {
  entry: './src/app.js', //起点となるjs
  output: {
    path: __dirname + "/dist", //__dirname 絶対パスが入っている
    filename: 'bundle.js' //生成されるファイル
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js" , ".yml"]
  },
  module: {
    loaders: [
      {
        //正規表現 ymlファイルだけを見る
        test: /\.yml$/,
        //ローダーの設定 ymlファイルはyaml-loaderを通ってからjson-loaderを通る
        //loader: 'json-loader!yaml-loader'
        loaders: ['json-loader', 'yaml-loader']
      }
    ]
  }
};