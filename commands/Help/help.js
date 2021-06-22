let Discord = require('discord.js');
const button = require('discord-buttons')

module.exports = {
  name: "help",
  aliases: [],
  usage: "help",
  description: "help desk",
  run: async (client, message, args) => {

//gimmics button //will contain image manuplition folder
let gimmicsbutton = new button.MessageButton()
.setLabel('Gimmicks')
.setStyle('blurple')
.setID('gimmicsbutton')

//utility button //will contain utility folde
let utilitybutton = new button.MessageButton()
.setLabel('Utility')
.setStyle('blurple')
.setID('utilitybutton')

//economy button //will contain economy folder
let economybutton = new button.MessageButton()
.setLabel('Economy')
.setStyle('blurple')
.setID('economybutton')

//moderation button //will contain mode folder
let modbutton = new button.MessageButton()
.setLabel('Moderation')
.setStyle('blurple')
.setID('modbutton')

//information button //will contain info folder
let infobutton = new button.MessageButton()
.setLabel('Information')
.setStyle('blurple')
.setID('infobutton')

//fun utility button //will contain fun folder
let funbutton = new button.MessageButton()
.setLabel('Fun Utility')
.setStyle('blurple')
.setID('funbutton')

//games button //will contain game folder
let gamebutton = new button.MessageButton()
.setLabel('Game')
.setStyle('blurple')
.setID('gamesbutton')

//rp button //will contain emotes n nsfw button
let rpbutton = new button.MessageButton()
.setLabel('Role Play')
.setStyle('blurple')
.setID('rpbutton')

//image service button //will conatin image folder
let extbutton = new button.MessageButton()
.setLabel('External Image')
.setStyle('blurple')
.setID('extbutton')

//nsfw boorus button //will contain nsfw folder n nswf emotes
let nsfwbutton = new button.MessageButton()
.setLabel('NSFW')
.setStyle('blurple')
.setID('nsfwbutton')


//reddit button //reddit folder
let redditbutton = new button.MessageButton()
.setLabel('Reddit')
.setStyle('blurple')
.setID('redditbutton')

//text button //text foldere
let textbutton = new button.MessageButton()
.setLabel('Text')
.setStyle('blurple')
.setID('textbutton')

//developer button //owner cmd
let devbutton = new button.MessageButton()
.setLabel('Dev Portal')
.setStyle('red')
.setID('devbutton')

//back buttons
let backbutton = new button.MessageButton()
.setLabel('Back')
.setEmoji('◀️')
.setStyle('grey')
.setID('backbutton')

//button row 1
let row1 = new button.MessageActionRow()
.addComponent(gimmicsbutton)
.addComponent(utilitybutton)
.addComponent(economybutton)
.addComponent(modbutton)
.addComponent(infobutton)

//button row 2
let row2 = new button.MessageActionRow()
.addComponent(funbutton)
.addComponent(gamebutton)
.addComponent(rpbutton)
.addComponent(extbutton)

//button row 3
let row3 = new button.MessageActionRow()
.addComponent(nsfwbutton)
.addComponent(redditbutton)
.addComponent(textbutton)
.addComponent(devbutton)

//help embed
const helpembed = new Discord.MessageEmbed()
 .setColor('#fa1616')
 .setTitle("AIRI's Support")
 .setDescription(`Please press a button below the message to explore the corresponding category \n \n Note: The nsfw category is only available in nsfw channels \n To Check Ping Manually: -ping \n \n [Server Subbort](https://discord.gg/EFuh6JcX2V) \n [To Invite Airi](${await client.generateInvite()}) `)

.setImage('https://imgur.com/T7NZPiW.png')
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())


//reply
   message.channel.send({
     embed: helpembed,
     components: [row1, row2, row3]
   })

  

  }
}