const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "slap",
  aliases: [],
  usage: "slap",
  description: "display slap",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/slap').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("slap")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: slap`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}