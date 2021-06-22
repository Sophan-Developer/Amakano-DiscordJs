const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "oh my god",
  aliases: ['omg'],
  usage: "oh my god",
  description: "display omg",
  run: async(client, message, args) => {

  
     const image = await api.get("gah");
     message.channel.send(image);
   
  }
}