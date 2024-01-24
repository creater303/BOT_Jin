const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');

const token = '填入你的token';
const bot = new TelegramBot(token, {
  polling: true,
  request: { // 设置代理
    agentClass: Agent,
    agentOptions: {
      socksPassword: '填入你的密码'
    }
  }
});

bot.onText(/\/低能/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id, '又遇到了一个低能的人');
  });

  bot.onText(/\/hi/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id, '活着呢');
  });
