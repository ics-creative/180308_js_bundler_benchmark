| name           | size  | build |
|:-------------- |:-----:|:------:|
| webpack (prod) | 1.2MB | 1.6sec |
| webpack (dev)  | 1.9MB | 1.4sec |
| fusebox        | 1.9MB | 2.0sec |
| percel         | 1.9MB | 5.3sec |
| rollup         | 1.2MB | 2.7sec |
| browserify     | 2.7MB | 2.6sec |


注釈

- バンドルツールによってはuglify-jsの内蔵有無が異なるので、ミニファイしない方針でテストした
- コードはESMを利用するようにしているが、CommonJSしか受け付けないツールもあるので、コードはバンドルツールにあわせて調整している。なので、表示結果に差異はないが、完全に同じコードでテストしたわけではない。
