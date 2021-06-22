let Discord = require('discord.js');

module.exports = {
  name: "clear",
  aliases: [],
  usage: "clear",
  description: "to delete message",
  run: (client, message, args) => {  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) 
  return message.channel.send("You Don't have permission.");

  let amountToPurge = args[0]
   if(isNaN(amountToPurge)) return
   message.channel.send("Please provide a integer");
  message.delete()
  message.channel.bulkDelete(amountToPurge)
  message.channel.send(`Deleted ${amountToPurge} messages!`).then(v => v.delete({timeout: 5000}))
 }
}