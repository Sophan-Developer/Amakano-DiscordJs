const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "kemonomimi",
  aliases: ['kemo'],
  usage: "kemonomimi",
  description: "display kemonomimi",
  run: async(client, message, args) => {

  
     const image = await api.get("kemonomimi");
     message.channel.send(image);
  
  }
}