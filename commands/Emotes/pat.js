const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "pat",
  aliases: [],
  usage: "pat",
  description: "display pat",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/pat').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("pat")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: pat`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}