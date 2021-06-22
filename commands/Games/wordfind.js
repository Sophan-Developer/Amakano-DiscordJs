const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { ChaosWords } = require("weky")
const { MessageButton } = require('discord-buttons')

  var randomWords = require('random-words');
  const words = randomWords(2) // generating 2 words

module.exports = {
 name: "chooseword",
 aliases: ['findword','wordfind','wordhunt'],
 usage: "choose word",
 description: "find word",
 run: async(client, message, args) => {

  await new ChaosWords({
      message: message,
      maxTries: 8, //max number  of user's tries (ends when reach limit)
      charGenerated: 20, //length of sentence (small length might throw error)
      words: words, //words (array) => ['word']
      embedTitle: 'Chaos words!', //understable
      embedFooter: 'Find the words in the sentence!',
      embedColor: 'RANDOM'
      }).start()

 }
}