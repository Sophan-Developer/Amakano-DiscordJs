const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "neko",
  aliases: [],
  usage: "neko",
  description: "display neko",
  run: async(client, message, args) => {

   {
     const image = await api.get("neko");
     message.channel.send(image);
   }
  }
}