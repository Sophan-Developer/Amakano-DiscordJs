const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "hug",
  aliases: [],
  usage: "hug",
  description: "display hug",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/hug').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("hug")
  .setImage(response.body.url)
  .setColor('random')
  .setFooter(`Tags: hug`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}