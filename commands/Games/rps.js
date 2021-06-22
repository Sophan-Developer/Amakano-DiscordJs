const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { RPS } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "-rps",
 aliases: [],
 usage: "rock paper sesior",
 description: "game",
 run: async(client, message, args) => {

const opponent = message.mentions.users.first();
if(!opponent) return message.channel.send(`Please mention who you want to fight`);

 new RPS({
    message: message,
    opponent: opponent, // NOT CHANGEABLE
    challenger: message.author, // NOT CHANGEABLE
    acceptMessage: "Click to fight with <@" + message.author + '> at RPS!', // message sent to see if opponent accepts
})
game.start()

 }
}
