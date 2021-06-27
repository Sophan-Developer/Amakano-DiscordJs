const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "goose",
  aliases: [],
  usage: "goose",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.goose();
      const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random goose image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}