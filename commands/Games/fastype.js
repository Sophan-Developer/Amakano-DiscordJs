const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { FastType } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "fasttype",
 aliases: ['ft'],
 usage: "fasttype game",
 description: "fasttype game",
 run: async(client, message, args) => {

const game = new FastType({
    message: message,
    winMessage: "GG you won!", // message sent when user types perfectly
    sentence: 'some string', // sentence-to-be-typed
    loseMessage: 'Lost ;(', // message sent when user misspell it
    time: 50000, // time that user has in ms
    startMessage: 'Good Luck!' // message sent when user starts playing
});
game.start()

 }
}