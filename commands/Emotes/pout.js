const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "pout",
  aliases: [],
  usage: "pout",
  description: "display pout",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/pout').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("pout")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: pout`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}