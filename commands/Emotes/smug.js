const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "smug",
  aliases: [],
  usage: "smug",
  description: "display smug",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/smug').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("smug")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: smug`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}