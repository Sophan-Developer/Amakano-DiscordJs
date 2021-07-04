let Discord = require('discord.js')
const db = require('quick.db');
const ms = require('pretty-ms');

module.exports = {
    name: "daily",
    aliases: ['claim'],
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let reward = 500;

const check = await db.get(`dailyCheck_${message.author.id}`)        

if(check !== null && timeout - (Date.now() - check) > 0) {

  const timeleft = ms(timeout - (Date.now() - check)) 

  let timeoutembed = new Discord.MessageEmbed()
    .setTitle(":calendar_spiral: Daily")
    .setDescription("You've already collected your daily fish!")
    .setColor('#f3ff08')
    .addField(`${timeleft}`, 'TimeLeft')
    .setFooter(`${message.author.username}`)
   message.channel.send(timeoutembed)
} else {
  let currentBalance = await db.get(`wallet_${message.author.id}`)
  let dailyembed = new Discord.MessageEmbed()
    .setTitle(":calendar_spiral: Daily")
    .setDescription("You've successfully taken your daily coin! \n `Daily Coin:        :coin: +500`")
    .setColor('#f3ff08')
    .setFooter(`${message.author.username}`)
   message.channel.send(dailyembed)

   await db.set(`wallet_${message.author.id}`, currentBalance + reward)
   await db.set(`dailyCheck_${message.author.id}`, Date.now())

}
    }
}