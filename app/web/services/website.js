import {
  CustomerServiceOutlined,
  GlobalOutlined,
  WechatOutlined,
  AppstoreOutlined,
  RiseOutlined,
  HomeOutlined,
  UserOutlined,
  ChromeOutlined,
  WindowsOutlined,
  AppstoreAddOutlined,
  FireOutlined,
} from '@ant-design/icons';

let WebsiteConfig = {
  slide: [{
    title: '🚀 我们都是自己的英雄.',
    subTitle: '我们都是自己的英雄',
    remark: '超多优惠(外卖、电影、星巴克等)、刷步数、壁纸等好用工具',
    actions: [{
      icon: <HomeOutlined />,
      title: '网站',
      href: 'https://tools.hocgin.top/',
    }],
    images: [{
      src: 'http://cdn.hocgin.top/uPic/mp-logo.jpg',
    }, {
      src: 'http://cdn.hocgin.top/uPic/好用榜单.jpeg',
    }, {
      src: 'http://cdn.hocgin.top/uPic/NES模拟器.jpeg',
    }],
  }, {
    title: '🚗 浏览器天气插件.',
    subTitle: '浏览器天气插件',
    remark: '完美支持 Chrome 内核的浏览器',
    actions: [{
      icon: <ChromeOutlined />,
      title: 'Chrome',
      href: 'https://chrome.google.com/webstore/detail/weather/ibieofighcnndjcjchdahdiacjpmkhgf',
    }, {
      icon: <WindowsOutlined />,
      title: 'Edge',
      href: 'https://microsoftedge.microsoft.com/addons/detail/mmjibclgkfldbhbnpcfoigijmfippfgg',
    }],
  }, {
    title: '🚶 好用榜单 - 小程序.',
    subTitle: '超多优惠信息、刷步数、壁纸等好用工具',
    remark: '扫码关注不迷路.',
    actions: [],
    images: [{
      src: 'http://cdn.hocgin.top/uPic/好用榜单.jpeg',
    }, {
      src: 'http://cdn.hocgin.top/uPic/NES模拟器.jpeg',
    }],
  }, {
    title: '🎮 NES 模拟器 - 网站.',
    subTitle: '复古游戏大全',
    remark: 'NES 模拟器.',
    actions: [{
      icon: <HomeOutlined />,
      title: '网站',
      href: 'https://nes.hocgin.top/',
    }, {
      icon: <HomeOutlined />,
      title: '小程序',
      href: 'weixin://dl/business/?t=zi2ejmZs2Kf',
    }],
  }],
  analysis: [{
    title: '服务人数',
    count: '16,000',
    icon: <RiseOutlined />,
    color: '#5956e9',
    backgroundColor: '#F1F1FC',
  }, {
    title: '访问总量',
    count: '211,200',
    icon: <FireOutlined />,
    color: '#F0AC44',
    backgroundColor: '#FDF7EC',
  }, {
    title: '注册用户',
    count: '2,200',
    icon: <UserOutlined />,
    color: '#E3607F',
    backgroundColor: '#FCEFF2',
  }, {
    title: '应用数量',
    count: '20',
    icon: <AppstoreAddOutlined />,
    color: '#6CC2E0',
    backgroundColor: '#F0F9FC',
  }],
  project: [{
    title: '小程序',
    remark: '我们已开发提供 10+ 个小程序，可以持续为用户提供良好的服务，欢迎加盟 😊',
    icon: <AppstoreOutlined />,
    color: '#5956e9',
    backgroundColor: '#F1F1FC',
    href: null,
  }, {
    title: '公众号',
    remark: '我们持续在公众号提供技术文章、优惠信息和领域信息等，欢迎关注 👏',
    icon: <WechatOutlined />,
    color: '#F0AC44',
    backgroundColor: '#FDF7EC',
  }, {
    title: '网站',
    remark: '我们提供了多个网站服务，为用户提供咨询和专业服务，欢迎持续关注 🚁',
    icon: <GlobalOutlined />,
    color: '#E3607F',
    backgroundColor: '#FCEFF2',
  }, {
    title: '客服支持',
    remark: '我们已开放用户群组，欢迎小伙伴们加入，加入方式可以关注我们的公众号获取哦 😄',
    icon: <CustomerServiceOutlined />,
    color: '#6CC2E0',
    backgroundColor: '#F0F9FC',
  }],
};

export default WebsiteConfig;
