const Discord = require('discord.js')

module.exports = {
 name: "google",
 aliases: ['g','search'],
 usage: "google",
 description: "google search for you",
 run: async(client, message, args) => {

  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
   if (!Query) message.reply("Please specify a search query. idiot!")
   else {
     let GG = new Discord.MessageEmbed()
     .setTitle(`Your Search Query: ${QueryD}`)
     .setDescription(`**Search Result** - [Click Here] (https://www.google.com/search?q=${Query})`)
     .setColor("random")
     .setFooter("LAZY BOIII")
     message.channel.send(GG)
     }

 }
}