const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cry",
  aliases: [],
  usage: "cry",
  description: "display cry",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/cry').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("cry")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: cry`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}