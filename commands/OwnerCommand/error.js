const Discord = require('discord.js');


module.exports = {
 name: "2work",
 aliases: ['pendingwork'],
 usage: "pending works",
 description: "whatever",
 run: async(client, message, args) => {

  if (message.author.id != '854005586177687552') {

   let embed = new Discord.MessageEmbed()
   .setTitle("Owner's Command xD")
   .setDescription("Check")
   .setColor("random")

  message.channel.send(embed) 
  } else {
    let notowner = new Discord.MessageEmbed()
    .setTitle("Owner's Command xD")
    .setDescription(`${message.author} you're not allowed to use this Command`)
    .setColor('#f50000')
   message.channel.send(notowner) 
  }

 }
}