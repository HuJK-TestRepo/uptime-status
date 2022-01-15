// 配置
window.Config = {

  // 站点名
  SiteName: 'JK-Network\'s server status and looking glass',

  // 站点链接
  SiteUrl: '/',

  SiteDescription: 'Click the following links to access the looking glass.',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1587435-6c14fff2aa246ab30ea6bc60',
    /*
    'm786322663-402cd609baf66832d847ef63',
    'm786322674-0773b2c046e85a9cd3344aa8',
    'm786322754-8bd9c8c0e7f6bc59ddc376e7',
    'm786322758-45dc64ec941e47673f2f5bd1',
    'm786336367-8105e54df5e10b1654fe5df7',
    'm786336382-19b8bc68931082ae50ad13fd',
    'm786344761-38ac7c80cfba3bff6b4ee9b0',
    'm786442374-d8ecbfbf82ad151ba3cf94f6',
    'm787511928-e4ce8aad127e7c28d714985b',
    'm788502517-d91440d32f8ab5200e337433',
    */
  ],

  URLreplacer : function (orgurl){
    return orgurl.replace("http://", 'https://').replace(".vm.", '42.').replace(":23000", '');
  },

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Peering Info',
      url: 'https://net.whojk.com/'
    }
  ]
};
