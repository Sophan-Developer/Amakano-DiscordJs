
const Discord = require('discord.js')

module.exports = {
  name: "test",
  aliases: [],
  usage: "test",
  description: "send meme",
  run: async(client, message, args) => {

let embed = new Discord.MessageEmbed()
	.setColor('#ffff1a')
	.setTitle('Amakano')
	.setURL('https://github.com/losier/Amakano-DiscordJs.git')

	.setDescription(`Hi! Thanks for inviting me to your lovely server! :heart: \n \n*No dashboard is required! You can set up every function within your Discord client by running the corresponding command.* \n\`\`\`yaml\n \n• Just write -help to get an overview of all my commands and features \n \n• With -bug/-feedback/-report you can report us any bug or give give your feedback about client \n \n•And by joining our support server you can request command too\n \n\`\`\`\n`)
  .addField('Support Server', '[Click Here](https://discord.gg/jhfMMSUTa4)', true)
  .addField('Invite Ama', `[Click Here](${await client.generateInvite()})`, true)
	.setImage('https://cdn.discordapp.com/attachments/854776194561081354/861253841386733628/PicsArt_07-04-08.04.46.jpg')
	.setTimestamp()
	.setFooter('Created by @854005586177687552')
  message.channel.send(embed)    

  }
}