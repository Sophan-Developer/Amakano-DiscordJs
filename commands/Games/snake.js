const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { Snake } = require('weky');
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "snake",
 aliases: [],
 usage: "snake game",
 description: "snake game",
 run: async(client, message, args) => {

new Snake({
    message: message,
    embed: {
    title: 'Snake', //embed title
    color: "#gt4668", //embed color
    gameOverTitle: "Game Over", //game over embed title
    },
    emojis: {
      empty: '⬛', //zone emoji
      snakeBody: '♿', //snake
      food: '💩', //food emoji
      //control
      up: '⬆️', 
      right: '⬅️',
      down: '⬇️',
      left: '➡️',
      },
    }).start()

 }
}
