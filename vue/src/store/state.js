import {commodityId,tab,address,recentlyBrowse,city,searchHistory} from 'js/cache'
const state = {
    category: tab.getTab(),   //分类条目
    commodityId: '',     // 单个商品的id
    goodsDetails: {},   // 商品详情
    userName: '',       // 用户名
    addressInfo: address.getAddress(),    //  保存要修改的地址
    browse: recentlyBrowse.getBrowse(), // 最近浏览
    shopOrderList: [],      // 购物车去结算的时候存入vuex
    temporaryAddress: '',   // 结算时候选择的地址
    city: city.getCity(),
    active: 0,  // 底部tab的class
    searchHistoryList: searchHistory.getHistory()   // 搜索历史
}

export default state