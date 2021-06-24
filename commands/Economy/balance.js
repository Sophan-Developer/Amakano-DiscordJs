const discord = require('discord.js');
const db = require("quick.db");

module.exports = {
 name: "balance",
 aliases: ['bal'],
 usage: "<balance>",
 description: "Part of Economy stystem",
 run: async(client, message, args) => {

  if(!message.content.startsWith('m!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`);
  message.channel.send(moneyEmbed)


 }
}