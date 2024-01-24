const TeleBot = require('telebot');

const bot = new TeleBot({
    token: TELEGRAM_BOT_TOKEN, // 这里需要填入从botfater处获取的token
    polling: { // 使用polling方式换取tg消息
        interval: 1000, // Optional. 检查是否有信息的频率 (in ms).
        timeout: 0, // Optional.  (0 - short polling).
        limit: 100, // Optional. 重试次数限制
        retryTimeout: 5000, // Optional. 重连timeout (in ms).
        proxy: 'http://username:password@yourproxy.com:8080' // Optional. An HTTP proxy to be used.
    },
    webhook: { // Optional. 使用webhook方式更新消息.
        key: 'key.pem', // Optional. 服务器公钥.
        cert: 'cert.pem', // Optional. 服务器私钥
        url: 'https://....', // 发送更新使用的HTTPS url
        host: '0.0.0.0', // Webhook 服务器主机
        port: 443, //服务器端口号
        maxConnections: 40 // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
    },
    allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
    usePlugins: ['askUser'], // Optional. 使用 plugins from pluginFolder.
    pluginFolder: '../plugins/', // Optional. Plugin folder location.
    pluginConfig: { // Optional. Plugin configuration.
        // myPluginName: {
        //   data: 'my custom value'
        // }
    }
});