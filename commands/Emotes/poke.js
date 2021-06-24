const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "poke",
  aliases: [],
  usage: "poke",
  description: "display poke",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/poke').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("poke")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: poke`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}