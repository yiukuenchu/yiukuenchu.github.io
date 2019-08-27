(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{315:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/yiukuenchu/image-farm/master/img/bot_banner.png",alt:""}})]),t._v(" "),e("p",[t._v("上个周末，我从零开始做了一个用于检索电影、演员以及获取电影资讯的 Telegram Bot。于是有了这篇文章，用来分享和记录我第一次制做 Telegram Bot 的过程。")]),t._v(" "),e("p",[t._v("点击链接：https://t.me/moviee_info_bot 跳转到 Telegram 即可使用。")]),t._v(" "),e("p",[t._v("项目源码："),e("a",{attrs:{href:"https://github.com/yiukuenchu/moviee",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yiukuenchu/moviee"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("为了控制篇幅便于阅读，本文并非详细教程，而是对整个过程的梳理以及一些我觉得值得一提的东西。如果你想学习做一个 Telegram Bot，建议将本文和上面提供的项目代码，配合其它文档食用。")]),t._v(" "),e("p",[t._v("通过阅读本文，你将可以：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对制作 Telegram Bot 充满信心")])]),t._v(" "),e("li",[e("p",[t._v("了解我制作这个 Telegram Bot 的大体流程")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/yiukuenchu/image-farm/master/img/show.jpg",alt:""}})]),t._v(" "),e("h1",{attrs:{id:"前期准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前期准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("为了方便开发调试，在电脑上打开"),e("a",{attrs:{href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Telegram 官网 "),e("OutboundLink")],1),t._v("，并下载桌面版本的 Telegram。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://telegram.me/BotFather",target:"_blank",rel:"noopener noreferrer"}},[t._v("@BotFather"),e("OutboundLink")],1),t._v(" 是一个用来管理所有 Bots 的 Telegram Bot。在里面用 "),e("code",[t._v("/newbot")]),t._v(" 创建一个 Bot，记录下它返回的 "),e("strong",[t._v("Token")]),t._v("。")])])]),t._v(" "),e("h1",{attrs:{id:"过程划分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过程划分","aria-hidden":"true"}},[t._v("#")]),t._v(" 过程划分")]),t._v(" "),e("h2",{attrs:{id:"_1-引入模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 引入模块")]),t._v(" "),e("p",[t._v("选择要引入的模块，当然随着开发过程一般会不断增加需要用到的模块。但一开始肯定要引入一个 Telegram Bot API。官方为制作 Telegram Bot 提供了多种多种语言的选择，每种语言又提供了多种 API。我选择了 Node.js，这里推荐一个使用起来较为简单的 "),e("a",{attrs:{href:"https://github.com/yagop/node-telegram-bot-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js Telegram Bot API"),e("OutboundLink")],1),t._v("。我们在终端进入项目文件夹后，用 "),e("code",[t._v("npm install node-telegram-bot-api")]),t._v(" 就能引入这个模块啦。然后在代码中用这个模块创建一个 Bot 实体，比如：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TelegramBot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node-telegram-bot-api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TelegramBot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("polling"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("这里 "),e("code",[t._v("{polling: true}")]),t._v(" 是指我们用 polling 轮询的方式获取用户的指令。")]),t._v(" "),e("h2",{attrs:{id:"_2-绑定-bot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-绑定-bot","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 绑定 Bot")]),t._v(" "),e("p",[t._v("我们怎么样绑定我们创建的 Bot 呢？对的，就是在代码中引入上面的 Bot Token。比如说你的 Token 是 123456:abcdefghijk。那么在代码中：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456:abcdefghijk'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"_3-开发功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-开发功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 开发功能")]),t._v(" "),e("p",[t._v("接下来就可以开发 Bot 的功能啦。如果你用的是上述第 1 步推荐的 API，那么极力推荐参考 "),e("a",{attrs:{href:"https://github.com/hosein2398/node-telegram-bot-api-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个文档"),e("OutboundLink")],1),t._v("，跟着里面的步骤实现一个简单的功能。比如：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("bot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\/start/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\nbot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("上面代码实现的效果是，当用户对 Bot 发送 "),e("code",[t._v("/start")]),t._v(" 消息时，Bot 就会回复一句 Welcome。")]),t._v(" "),e("p",[t._v("类似地，通过 "),e("code",[t._v("bot.sendPhoto")]),t._v(" 可以让 Bot 发送一张图片。Bot 的许多其他行为都包含在这个 API 中，发挥想象便可以实现一些有趣的功能。")]),t._v(" "),e("h2",{attrs:{id:"_4-部署上线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署上线","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 部署上线")]),t._v(" "),e("p",[t._v("此时，在调试的过程中我发现 Bot 是无法对用户的指令作出回应的，因为它还没有连接到 Bot Server。因此这个项目中我在开发过程中便将项目部署在服务器上，这里我选择了部署在 "),e("a",{attrs:{href:"https://www.heroku.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("但紧接着，我发现了一个问题，服务开启一段时间后， Bot 便不再对指令作出回应。")]),t._v(" "),e("p",[t._v("我在后台查看服务的 Logs 并根据 Heroku 官方文档找到了原因： Heroku 的免费账号限制服务如果一段时间内没有动作，便会自动进入休眠状态。")]),t._v(" "),e("p",[t._v("为了避免这种情况，我用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/express",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),e("OutboundLink")],1),t._v(" 的服务让服务器持续监听一个端口，使得这个服务器无法进入休眠状态。因此我们用 "),e("code",[t._v("npm install express")]),t._v(" 安装 express 模块，接着在代码中：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入 express")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听端口")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PORT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("这样，就能让你的 Telegram Bot 24/7 不停工作啦。")]),t._v(" "),e("h1",{attrs:{id:"其他说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他说明")]),t._v(" "),e("ol",[e("li",[t._v("我做的这个 Telegram Bot 的电影数据来源 "),e("a",{attrs:{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TMDb"),e("OutboundLink")],1),t._v("，如果你感兴趣，可以注册登录后在 "),e("a",{attrs:{href:"https://www.themoviedb.org/settings/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("TMDb API"),e("OutboundLink")],1),t._v(" 页面生成一个 API Key，根据 TMDb API 官方文档在你的项目中使用这项服务。")]),t._v(" "),e("li",[t._v("在解决服务自动休眠的问题时，我发现了 "),e("a",{attrs:{href:"http://kaffeine.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kaffeine"),e("OutboundLink")],1),t._v("。这是一个解决 Heroku 免费账户限制服务器休眠问题的项目，它的思路是每隔一段时间 ping 你的服务 URL。类似的项目还有 "),e("a",{attrs:{href:"https://uptimerobot.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UptimeRobot"),e("OutboundLink")],1),t._v(" 等。但这些毕竟是第三方服务，安全问题值得考虑。")]),t._v(" "),e("li",[t._v("Heroku 免费账户如果绑定了信用卡，可以通过添加 "),e("a",{attrs:{href:"https://elements.heroku.com/addons/newrelic",target:"_blank",rel:"noopener noreferrer"}},[t._v("New Relic"),e("OutboundLink")],1),t._v(" 这个 add-on，避免服务器自动休眠。")])]),t._v(" "),e("h1",{attrs:{id:"感想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#感想","aria-hidden":"true"}},[t._v("#")]),t._v(" 感想")]),t._v(" "),e("p",[t._v("本文列出了制作一个 24/7 Telegram Bot 的大体过程。虽然 Telegram 在国内的用户只是很小一部分，但它本身的可发掘性是摆在那里的。对于编程感兴趣的小伙伴不妨以 Telegram Bot 作为起点开始学习。而对于普通用户来说，如果能在这个过程中养成「遇到问题，查找文档，解决问题」的思维方式，也是收获了一种解决问题的经验嘛。🍺")])])},[],!1,null,null,null);a.default=r.exports}}]);