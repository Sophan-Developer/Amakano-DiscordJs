const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "wallpapers",
  aliases: ['wp','walpaper'],
  usage: "wallpapers",
  description: "display wallpapers",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/wallpapers').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("wallpapers")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: wallpapers`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}