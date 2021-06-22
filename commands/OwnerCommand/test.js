const discord = require('discord.js');


module.exports = {
 name: "t",
 aliases: [],
 usage: "test",
 description: "for test",
 run: async(client, message, args) => {

 if (message.channel.nsfw === true) {
 
 message.channel.send("vheck");
 } else {
message.delete({timeout: 10000})
 const notnsfw = new discord.MessageEmbed()
 .setTitle("🚫 NSFW")
 .setDescription("The process has been blocked because the current channel is not marked as NSFW!")
 .setColor('#f50000')
 .setFooter("This message disappears in 10 seconds.")
 message.channel.send(notnsfw).then(message => {
 message.delete({timeout: 10000})
 })
 }
 }
}