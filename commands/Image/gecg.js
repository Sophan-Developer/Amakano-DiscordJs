const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "gecg",
  aliases: [],
  usage: "gecg",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.gecg();
      const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random genetically engineered catgirl image`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}