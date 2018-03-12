| name            | size  | build |
|:--------------- |:-----:|:------:|
| webpack 4 (prod)| 1.2MB | 1.6sec |
| webpack 4 (dev) | 1.9MB | 1.4sec |
| webpack 3       | 1.8MB | 2.8sec |
| fusebox         | 1.9MB | 1.9sec |
| percel          | 1.8MB | 5.3sec |
| rollup          | 1.2MB | 2.7sec |
| browserify      | 2.7MB | 2.6sec |


注釈

- バンドルツールによってはuglify-jsの内蔵有無が異なるので、ミニファイしない方針でテストした
- 検証に用いたコードは以下のJSライブラリを利用している
  - React
  - Three
  - RxJS
- ソースコードはESMを利用するようにしているが、CommonJSしか受け付けないツールもあるので、コードはバンドルツールにあわせて調整している。なので、表示結果に差異はないが、browerifyについては同じコードでテストしたわけではない
- Percelは内部的にBabelへのトランスパイルが入っており、FuseBoxはTypeScriptのコンパイルが入っているため、ビルド時間の計測では他のツールと同一条件でないことは留意願いたい
- 検証に用いた各種モジュールのバージョンは[package.json](benchmark-project/package.json)を参照のこと
