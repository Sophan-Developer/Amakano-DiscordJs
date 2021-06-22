let Discord = require('discord.js');

module.exports = {
  name: "rickroll",
  aliases: [],
  usage: "rickroll",
  description: "rickroll",
  run: async (client, message, args) => {
      let rickroll = new Discord.MessageEmbed()
        .setTitle('RickRoll')
        .setImage('https://media1.tenor.com/images/8c409e6f39acc1bd796e8031747f19ad/tenor.gif?itemid=17029825.gif')
    message.channel.send(rickroll)    
  }
}