const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "lick",
  aliases: [],
  usage: "lick",
  description: "display lick",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/lick').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("lick")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: lick`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}