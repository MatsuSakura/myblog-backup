module.exports = {
  "title": "羽谈",
  "description": "代码学习者，老二次元，会偶尔分享生活日常和番剧评析",
  "dest": "./dist",
  "base":'/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "description",
        "content": "该网站用于记录日常学习用到的相关技术，会偶尔分享生活日常和番剧评析"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "番剧评析",
        "link": "/docs/bangumi/",
        "icon": "reco-message"
      },
      {
        "text": "代码分享",
        "icon": "reco-message",
        "items":[
          {
            "text":"腾讯云cdn",
            "link":"/docs/code/",
          }
        ]
      },
      {
        "text": "学习资料",
        "icon": "reco-message",
        "items": [
          {
            "text": "Linux",
            "link": "/docs/xuexi/Linux/"
          },
          {
            "text": "Java",
            "link": "/docs/xuexi/Java/"
           },
           {
            "text": "数据库",
            "link": "/docs/xuexi/shujuku/"
           },
        ]
      },
      {
        "text": "粉丝福利",
        "icon": "reco-message",
        "items": [
            {
                "text": "电子书",
                "link": "/docs/welfare/books/"
            },
            
        ]
       },
    ],
    valineConfig: {     // valine 评论功能配置信息
      appId: 'JStJX678XExLTA4xhN2ifwEi-gzGzoHsz',// your appId
      appKey: 'b4rPrkSl7QNXAqv6qC13UfcU', // your appKey
      placeholder: '发表一个友善的评论',     // 评论框占位符
      avatar: 'wavatar',      // 评论用户的头像类型
      highlight: true,      // 代码高亮
      recordIP: true,    // 记录评论者的IP
    },
    "sidebar": {
      "/docs/bangumi/": [
        {
          title: '好看就vans了',
          children: ['']
        },
        {
          title: '番剧评价',
          children:['prettydebby','86','vivy','black']
        }
       ],
       "/docs/Linux/": [
         ""
      ],
      "/docs/xuexi/Linux/": [
        ""
      ],
      "/docs/xuexi/Java/": [
        {
          title: 'Java考证复习',
          children: ['']
        },
      ],
      "/docs/xuexi/shujuku/": [
        {
          title: '数据库学习技巧',
          children: ['']
        },
        {
          title: '数据库期末复习',
          children:['share']
        }
      ],
      "/docs/welfare/books/": [
        {
          title: '电子书分享',
          children: ['']
        },
      ],
      "/docs/code/":[
        {
          title:'壁外调查',
          children:['']
        }
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "电子书分享",
        "desc": "",
        "email": "980941061@qq.com",
        "link": "链接"
      },
      {
        "title": "码云",
        "desc": "",
        "email": "980941061@qq.com",
        "link": "链接"
      },
    {
        "title": "B站",
        "desc": "",
        "email": "980941061@qq.com",
        "link": "https://space.bilibili.com/13059926"
    },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "千羽沫Sakura",
    "authorAvatar": "/avatar.jpg",
    "record": "我的备案号",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}