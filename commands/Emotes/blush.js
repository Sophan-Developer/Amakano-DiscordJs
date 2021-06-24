const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "blush",
  aliases: [],
  usage: "blush",
  description: "display blush",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/blush').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("blush")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: blush`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}