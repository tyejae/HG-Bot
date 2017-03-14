const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MjkwOTI4NDYwNjIzMzgwNDgw.C6iYeQ.8Oin_Kv2E5bMwfRubQAlusoAmfo');