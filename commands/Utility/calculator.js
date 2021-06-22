const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { Calculator } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "calculator",
 aliases: ['calc','maths'],
 usage: "calculate",
 description: "calculate",
 run: async(client, msg, args) => {

   await Calculator(msg)

 }
}