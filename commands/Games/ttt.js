const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { TicTacToe } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "ttt",
 aliases: ['tictactoe'],
 usage: "ttt @user",
 description: "ttt",
 run: async(client, message, args) => {

const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);


const game = new TicTacToe({
    message: message,
    opponent: opponent, // opponent
    xColor: 'red', // x's color
    oColor: 'blurple', //zero's color
    xEmoji: '❌',  //t he x emoji
    oEmoji: '0️⃣' ,// the zero emoji
})
game.start()// start da game

 }
}