const Discord = require('discord.js');
const disbut = require('discord-buttons')


module.exports = {
  name: "ticket",
  aliases: [],
  usage: "make a ticket channel",
  description: "to create ticket channel",
  run: async (client, message, args) => {


	let btn1 = new disbut.MessageButton()
	.setStyle('red')
	.setEmoji("🎫")
	.setID('1')
	message.delete()
	message.channel.send(`react here to open a ticket`, btn1)
	}
}

