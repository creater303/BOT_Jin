const TeleBot = require('telebot');

const bot = new TeleBot({
    token: TELEGRAM_BOT_TOKEN, // 这里需要填入从botfater处获取的token
    polling: { // 使用polling方式换取tg消息
        interval: 1000, // 配置. 检查是否有信息的频率 (in ms).
        timeout: 0, // 配置.  (0 - short polling).
        limit: 100, // 配置. 重试次数限制
        retryTimeout: 5000, // 配置. 重连timeout (in ms).
        proxy: 'http://username:password@yourproxy.com:8080' // 配置. An HTTP proxy to be used.
    },
    webhook: { // 配置. 使用webhook方式更新消息.
        key: 'key.pem', // 配置. 服务器公钥.
        cert: 'cert.pem', // 配置. 服务器私钥
        url: 'https://....', // 发送更新使用的HTTPS url
        host: '0.0.0.0', // Webhook 服务器主机
        port: 443, //服务器端口号
        maxConnections: 40 // 配置. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
    },
    allowedUpdates: [], // 配置. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
    usePlugins: ['askUser'], // 配置. 使用 plugins from pluginFolder.
    pluginFolder: '../plugins/', // 配置. Plugin folder location.
    pluginConfig: { // 配置. Plugin configuration.
        // myPluginName: {
        //   data: 'my custom value'
        // }
    }
});
