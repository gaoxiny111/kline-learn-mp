# K线学堂 · 微信小程序

独立仓库：https://github.com/gaoxiny111/kline-learn-mp  

对应 H5 项目 [kline-learn](https://github.com/gaoxiny111/kline-learn) 的学习 / 行情 / 持有 / 自选。用微信开发者工具打开**本目录**即可预览。

## 打开方式

1. 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目，目录选本仓库根目录
3. AppID 可先用测试号；上线前在 `project.config.json` 换成正式小程序 AppID
4. 开发阶段勾选「不校验合法域名」；正式版需在小程序后台配置 request 域名：
   `kline-learn-d0ghml5k29b2f6cd8-1258512082.ap-shanghai.app.tcloudbase.com`

## 功能

| Tab | 说明 |
|---|---|
| 持有 | 本地持仓 + 报价 |
| 行情 | 指数、热门股、搜索 |
| 自选 | 关注列表 |
| 学习 | 图鉴、练习、测验（形态数据与 H5 同源） |
| 我的 | 进度、涨跌颜色、`wx.login` |

K 线用小程序 canvas 绘制，行情走现有云函数 HTTP 接入。

## 更新形态数据

形态识别逻辑在 `src/`（从 H5 同步）。改完后：

```bash
npm install
npm run build
```

会生成 `utils/core.js` 与 `images/tab-*.png`。

## 上线前

1. 微信公众平台注册小程序，类目按教育/工具评估审核
2. 云开发控制台绑定该小程序 AppID（若要用 `wx.login` 换 openid）
3. 配置服务器域名与业务域名
