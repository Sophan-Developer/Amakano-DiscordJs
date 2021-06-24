const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "tickle",
  aliases: [],
  usage: "tickle",
  description: "display Tickle",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/tickle').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Tickle")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: tickle`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}