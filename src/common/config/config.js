// default config
module.exports = {
    default_module: 'api',
    weixin: {
        appid: 'wxd7a0cd12bff6ee66', // 小程序 appid
        secret: '6e3374f6f639b61382e77bee5fc9b4e8', // 小程序密钥
        mch_id: '1514477531', // 商户帐号ID
        partner_key: 'REBLUE20180410GOLDMONEYCASHMONEY', // 微信支付密钥
        notify_url: 'https://mini.erbg.ren/api/pay/notify' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
    },
    express: {
        // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
        appid: '', // 对应快递鸟用户后台 用户ID
        appkey: '', // 对应快递鸟用户后台 API key
        request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
    }
};
