let Discord = require('discord.js');

module.exports = {
  name: "userinfo",
  aliases: [],
  usage: "userinfo",
  description: "gives user info",
  run: async (client, message, args) => {

let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("random")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
}
}