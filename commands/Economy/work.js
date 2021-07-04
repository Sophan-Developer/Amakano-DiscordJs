let Discord = require('discord.js')
const db = require('quick.db');
const ms = require('pretty-ms');

module.exports = {
    name: "work",
    description: "Work your ass off",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return
          let embed = new Discord.MessageEmbed() 
            .setTitle(":briefcase: Work")
            .setDescription("You already were at work not long ago. You should get some rest first.")
            .setColor('#f3ff08')
            .addField(`${time.minutes}m and ${time.seconds}s`, '')
            .setFooter(`${message.author.username}`) 
             message.channel.send(embed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
        
          let workembed = new Discord.MessageEmbed()
            .setTitle(":briefcase: Work")
            .setDescription(`${user}, you worked and earned ${amount} coins`)
            .setColor('#f3ff08')
            .setFooter(`${message.author.username}`) 

          message.channel.send(workembed)
        }
    }
}