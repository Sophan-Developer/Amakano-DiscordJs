const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "sleep",
  aliases: [],
  usage: "sleep",
  description: "display sleep",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/sleep').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("sleep")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: sleep`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}