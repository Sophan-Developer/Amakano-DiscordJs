const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "cattext",
  aliases: ['ct'],
  usage: "cat",
  description: "NSFW",
  run: async(client, message, args) => {

    const catTEXT = await neko.sfw.catText();
     message.channel.send(catTEXT.cat);
  }
}