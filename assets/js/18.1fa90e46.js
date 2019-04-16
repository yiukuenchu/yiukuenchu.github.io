(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{303:function(t,r,a){"use strict";a.r(r);var e=a(1),s=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("“好看是第一生产力。”"),a("br"),t._v("\n--by SpencerWoo")])]),t._v(" "),a("p",[t._v("对于普通用户来说，macOS自带的Terminal已经是够用。但如果你对它有所不满，期待一个更美观没强大的终端。那么，你应该往下看。😄")]),t._v(" "),a("h2",{attrs:{id:"准备清单📦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备清单📦","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备清单📦")]),t._v(" "),a("ul",[a("li",[t._v("iTerm2")]),t._v(" "),a("li",[t._v("zsh")]),t._v(" "),a("li",[t._v("oh-my-zsh")])]),t._v(" "),a("h2",{attrs:{id:"什么是iterm2？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是iterm2？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是iTerm2？")]),t._v(" "),a("p",[t._v("简单来说，iTerm2是一款比Terminal更强大的macOS终端。\n"),a("a",{attrs:{href:"https://www.iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载iTerm2"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"安装-oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-zsh","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 oh-my-zsh")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oh-my-zsh官网"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("via curl：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n')])])]),a("ul",[a("li",[t._v("via wget：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"\n')])])]),a("h2",{attrs:{id:"安装-powerline-fonts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-powerline-fonts","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Powerline Fonts")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oh-my-zsh的Github地址"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("via git：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/powerline/fonts.git --depth=1; cd fonts; ./install.sh; cd ..; rm -rf fonts\n")])])]),a("p",[t._v("安装完后，打开iTerm2的设置，在Profile中找到Text，点击Change Font即可修改字体，我用的字体是 "),a("strong",[t._v("Meslo LG M Regular for Powerline")]),t._v("。\n"),a("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1g078c4t58sj31ga0u0wtt.jpg",alt:""}})]),t._v(" "),a("p",[t._v("接着修改字体颜色，在Profile里找到Color。我推荐使用 "),a("strong",[t._v("Solarized Dark")]),t._v("。\n"),a("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1g0784y62jlj31jj0u07jl.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配置主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置主题")]),t._v(" "),a("p",[t._v("安装了oh-my-zsh后，就可以通过下面的命令查看所有默认主题：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ls ~/.oh-my-zsh/themes\n")])])]),a("p",[t._v("通过下面的命令，打开配置文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vim ~/.zshrc\n")])])]),a("p",[t._v('将ZSH_THEME 的值改为 ZSH_THEME="agnoster"，保存退出。')]),t._v(" "),a("h2",{attrs:{id:"gruvbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gruvbox","aria-hidden":"true"}},[t._v("#")]),t._v(" gruvbox")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/morhetz/gruvbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("gruvbox"),a("OutboundLink")],1),t._v("是一款沿用Solarized的配色方案而衍生出来的主题，下面是它的效果：\n"),a("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1g078qhjwqdj31k30u0aqu.jpg",alt:""}})]),t._v(" "),a("p",[t._v("感兴趣的小伙伴自行研究研究吧。")]),t._v(" "),a("p",[t._v("感谢阅读。❤️")])])},[],!1,null,null,null);r.default=s.exports}}]);