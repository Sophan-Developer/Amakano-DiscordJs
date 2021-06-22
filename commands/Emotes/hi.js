let Discord = require('discord.js');

module.exports = {
  name: "hi",
  aliases: ['hello','hlw','hola'],
  usage: "hi",
  description: "says hello",
  run: async (client, message, args) => {
  

           message.channel.send("Hello ✧w✧")
  }
}