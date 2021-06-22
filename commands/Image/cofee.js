const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "coffee",
  aliases: ['sleepy'],
  usage: "coffee",
  description: "i want coffee",
  run: async(client, message, args) => {

  
     const image = await api.get("coffee");
     message.channel.send(image);
   
  }
}