let Discord = require('discord.js');

module.exports = {
  name: "thank",
  aliases: [],
  usage: "thanks",
  description: "thanks",
  run: async (client, message, args) => {
    let victim = message.mentions.users.first();
      if(!victim) {
      message.reply("Mention someone to Thank, You Idiot!")
    } else {
      let thanks = new Discord.MessageEmbed()
        .setTitle("Sending Virtual Thanks")
        .setDescription(`${victim} was thanked by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://imgur.com/CZYkr7c.png')
        .setFooter("Virtual Thanks sent")
      message.channel.send(thanks)
    }

  }
}
  