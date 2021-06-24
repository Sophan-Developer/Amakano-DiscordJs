const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "punch",
  aliases: [],
  usage: "punch",
  description: "display punch",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/punch').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("punch")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: punch`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}