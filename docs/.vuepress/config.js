module.exports = {
  title: '鸭鸭算法手册',
  description: '算法学习',
  evergreen: true,
  head: [
    // ...
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' 
    }],
    ['link', { 
      rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" 
    }],
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  themeConfig: {
    logo: 'assets/img/duck.png',
    displayAllHeaders: true ,
    activeHeaderLinks: false,
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'About', link: '/' }
    ],
    sidebar: [
      {
        title: '基础应用',
        path:'/基础应用/',
        sidebarDepth: 2,
        collapsable: false,
        children: [
        ]
      },{
        title:'数据结构',
        path:'/数据结构/',
        sidebarDepth:2,
        collapsable: false,
        children:[
          ['/数据结构/zi-fu-chuan-string','字符串string'],
          ['/数据结构/xiang-liang-vector','向量vector'],
          ['/数据结构/shu-ju-dui-pair','数据对pair'],
          ['/数据结构/ying-she-map','映射map'],
          ['/数据结构/ji-he-set','集合set'],
          ['/数据结构/bing-cha-ji','并查集'],
          ['/数据结构/shu-zhuang-shu-zu','树状数组']
        ]
      },
      {
        title: '排序',
        path: '/排序/',
        sidebarDepth: 2,
        children: [
        ]
      },{
        title: '基础数学',
        path: '/基础数学/',
        sidebarDepth: 2,
        children: [
          ['/基础数学/zui-da-gong-yue-shu','最大公约数'],
          ['/基础数学/zhi-yin-shu','质数和因数']
        ]
      }, {
        title: '动态规划',
        path: '/动态规划/',
        sidebarDepth: 2,
        children: [
          ['/动态规划/01bag', '01背包'],
          ['/动态规划/wan-quan-bei-bao', '完全背包'],
          ['/动态规划/duo-chong-bei-bao', '多重背包'],
          ['/动态规划/lis', 'LIS'],
          ['/动态规划/lcs', 'LCS'],
          ['/动态规划/lps', 'LPS']
        ]
      }, {
        title: '二分搜索',
        path: '/二分搜索/',
        sidebarDepth: 0,
        children: [
          ['/二分搜索/01search', '查找特定的数'],
          ['/二分搜索/02insert', '查找指定条件'],   
        ]
      },{
        title: '图论',
        path: '/图论/',
        sidebarDepth: 2,
        children: [
          ['/图论/tu-de-biao-shi', '图的表示'],
          ['/图论/zui-duan-lu-jing', '最短路径'],
          ['/图论/zui-xiao-sheng-cheng-shu', '最小生成树']
        ]
      }, {
        title: '常用函数',
        path: '/常用函数/',
        sidebarDepth: 2,
        children: [
          ['/常用函数/zi-fu-chuan-chu-li', '字符串处理'],
          ['/常用函数/jian-yi-suan-fa', '简易算法']
        ]
      }              
    ]
  }
  
}