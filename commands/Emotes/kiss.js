let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "kiss",
  aliases: [],
  usage: "kiss",
  description: "show kissing image",
  run: async (client, message, args) => {

  let author = message.author
  let user = message.mentions.users.first()
  if(!user) return message.reply("mention someone to lob")
  let avatar1 = author.displayAvatarURL({ format: "png", dynamic: false })
  let avatar2 = user.displayAvatarURL({ format: "png", dynamic: false })
  let image = await canvacord.Canvas.kiss(avatar1 ,avatar2)
  let ATTC = new Discord.MessageAttachment(image, "kiss.png")
  message.reply(ATTC)
   


  }
}