const Discord = require('discord.js');

module.exports = {
 name: "nickname",
 aliases: ['nameme'],
 usage: "nickname",
 description: "nickname",
 run: async(client, message, args) => {

 let nicknames = ["AssHole", "Idiot", "Dumass", "Bitch", "Cutie", "Goodguy", "ShitMan", "DickHead", "Lord"]


  message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new Nickname dude!`)

 }
}