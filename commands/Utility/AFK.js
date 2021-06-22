const Discord = require('discord.js')
const db = require('quick.db');

module.exports = {
 name: "afk",
 aliases: [],
 usage: "afk",
 description: "set AFK",
 run: async(client, message, args) => {

if(db.has(message.author.id + '-afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '-afk')
 db.delete(message.author.id + '-messageafk')
 }
 if (message.content.startsWith('-afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
 // then here you use the database :
 db.set(message.author.id + '-afk','true')
 db.set(message.author.id + '-messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('-afk off')) {
 db.delete(message.author.id + '-afk')
 db.delete(message.author.id + '-messageafk')
 }
 // If one of the mentions is the user
    message.mentions.users.forEach(user =>{
  if (message.author.bot) return false;

   if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
   if(db.has(user.id + '-afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
   })
 }
}