let Discord = require('discord.js');
const button = require('discord-buttons')

module.exports = {
  name: "help",
  aliases: [],
  usage: "help",
  description: "help desk",
  run: async (client, message, clickButton, args) => {

const filter = (button) => button.clicker.user === message.author;    

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
.setID('gamebutton')

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

//back buttons
let backbutton = new button.MessageButton()
.setLabel('Back')
.setStyle('grey')
.setID('backbutton')

//button row 1
let row1 = new button.MessageActionRow()
.addComponent(gimmicsbutton) //done
.addComponent(utilitybutton) //done
.addComponent(economybutton) //
.addComponent(modbutton) //done
.addComponent(infobutton) //

//button row 2
let row2 = new button.MessageActionRow()
.addComponent(funbutton) //
.addComponent(gamebutton) //
.addComponent(rpbutton) //
.addComponent(extbutton) //

//button row 3
let row3 = new button.MessageActionRow()
.addComponent(nsfwbutton)
.addComponent(redditbutton)
.addComponent(textbutton)



//help embed
const helpembed = new Discord.MessageEmbed()
 .setColor('#66e89a')
 .setAuthor("AIRI's Support")
 .setTitle("xyz")
 .setDescription('```yaml\nPlease press a button below the message to explore the corresponding category```\n ```yaml\nNote: The nsfw category is only available in nsfw channels```')
.setImage('https://cdn.discordapp.com/attachments/854776194561081354/861253841386733628/PicsArt_07-04-08.04.46.jpg')
.addField('Support Server', '[Click Here](https://discord.gg/jhfMMSUTa4)', true)
.addField('Invite Ama', '[Click Here](https://dsc.gg/ama)', true)
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

//'```Please press a button below the message to explore the corresponding category \n \n Note: The nsfw category is only available in nsfw channels \n To Check Ping Manually: -ping \n \n [Server Subbort](https://discord.gg/EFuh6JcX2V) \n [To Invite Airi](${await client.generateInvite()}) ```'

//moderation embed
const modembed = new Discord.MessageEmbed()
      .setTitle("Categories » Moderation")
      .setColor("#66e89a")
      .setDescription("```yaml\nThese Command Require Certain Permission To Run, Every Member Can't Use These Command```")
      .addFields(
        { name: 'Ban'  , value: 'Ban a member and give a reason', inline: true },
        { name: 'Kick' , value: 'Kick a member and give a reason', inline: true },
        { name: 'Mute' , value: 'Mute a member and give a reason', inline: true },
        { name: 'Unmute' , value: 'Unmute a member and give a reason', inline: true },
        { name: 'Warn' , value: 'Warn a member and give a reason', inline: true },
        { name: 'Warncheck' , value: 'Shows previous warnings of an user', inline: true },
        { name: 'Removewarn' , value: 'Removes a specific amount of warnings for specific users', inline: true },
        { name: 'Slowmode' , value: 'Enable Slowmode', inline: true },
        { name: 'Clear' , value: 'Deletes a specific amount of messages', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//gimmics embed
const gimmicsembed = new Discord.MessageEmbed()
      .setTitle("Categories » Gimmicks")
      .setColor("#66e89a")
      .setDescription("```yaml\nThese Are Some Image manuplition Commands```")
      .addFields(
        { name: 'Affect'  , value: 'Enhances the pfp of a user in affect meme', inline: true },
        { name: 'Blur' , value: 'Blur the pfp of a user ', inline: true },
        { name: 'Circle' , value: 'Circle the pfp of a user', inline: true },
        { name: 'Comments' , value: 'Enhances the pfp of a user in Comments meme', inline: true },
        { name: 'Delete' , value: 'Enhances the pfp of a user in delete meme', inline: true },
        { name: 'Faceplam' , value: 'Put a Plam on the pfp of a user', inline: true },
        { name: 'Hitler' , value: 'Makes the pfp of a user greater than hitler', inline: true },
        { name: 'Invert' , value: 'Inver a users pfp', inline: true },
        { name: 'Jail' , value: 'Enhances the pfp of a user with bars', inline: true },
        { name: 'Jokeoverhead' , value: 'Enhances the pfp of a user with a jhd', inline: true },
        { name: 'Pixelrate' , value: 'Pixel rate the pfp of a user', inline: true },
        { name: 'Rainbow' , value: 'Enhances the pfp of a user with a rainbow', inline: true },
        { name: 'Rip' , value: 'Enhances the pfp of a user in grave', inline: true },
        { name: 'Ship' , value: 'Ship two users together', inline: true },
        { name: 'Shit' , value: 'Enhances the pfp of a user with a shit', inline: true },
        { name: 'Trash' , value: 'Enhances the pfp of a user with a trash', inline: true },
        { name: 'Trigger' , value: 'Enhances the pfp of a user with a trigger gif', inline: true },
        { name: 'Wanted' , value: 'Enhances the pfp of a userin wanted poster', inline: true },
        { name: 'Wasted' , value: 'Enhances the pfp of a user with wasted', inline: true },

      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//utility embed      
const utilityembed = new Discord.MessageEmbed()
      .setTitle("Categories » Utility")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Utility Commands```")
      .addFields(
        { name: 'AFK' , value: 'Mark yourself afk when you go afk', inline: true },
        { name: 'Calculator' , value: 'To help you in Maths', inline: true },
        { name: 'CoinFlip' , value: 'This command helps you to flip a coin', inline: true },
        { name: 'Embedmaker' , value: 'send text in embed', inline: true },
        { name: 'IMDB' , value: 'Get review from imdb for any show/movie', inline: true },
        { name: 'NSFW' , value: 'makes a channel nsfw n sfw', inline: true },
        { name: 'Playstore' , value: 'Get information about any app in playstore', inline: true },
        { name: 'Poll' , value: 'Creates a poll', inline: true },
        { name: 'Prefix' , value: 'Change prefix for your Server', inline: true },
        { name: 'Screenshot' , value: 'Take some screenshot for you from any link', inline: true },
        { name: 'Ticket' , value: '-UNDER CONSTRACTION-', inline: true },
        { name: 'Timer' , value: 'Set a timer', inline: true }

      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//economy embed
const economyembed = new Discord.MessageEmbed()
      .setTitle("Categories » Economy")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Economy Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//info embed
const infoembed = new Discord.MessageEmbed()
      .setTitle("Categories » Information")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Information Commands```")
      .addFields(
       { name: 'FirstMessage' , value: 'To Check 1st message by a user in that server', inline: true },
       { name: 'Invites' , value: 'To check no on invites by a user', inline: true },
       { name: 'Ping' , value: 'To check bot latency', inline: true },
       { name: 'Prefix' , value: 'To check bot Prefix', inline: true },
       { name: 'ServerInfo' , value: 'Display server information', inline: true },
       { name: 'UserInfo' , value: 'Display user information', inline: true },
       { name: 'weather' , value: 'To check weather', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//fun embed
const funembed = new Discord.MessageEmbed()
      .setTitle("Categories » Fun")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Fun Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//game embed
const gameembed = new Discord.MessageEmbed()
      .setTitle("Categories » Game")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Game Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//rp embded
const rpembed = new Discord.MessageEmbed()
      .setTitle("Categories » RolePlay")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Role Play Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//Externalembed
const extembed = new Discord.MessageEmbed()
      .setTitle("Categories » External")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic External Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")     

//nsfw embed
const nsfwembed = new Discord.MessageEmbed()
      .setTitle("Categories » NSFW")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic NSFW Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//reddit embed
const redditembed = new Discord.MessageEmbed()
      .setTitle("Categories » Reddit")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Reddit Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//text embed
const textembed = new Discord.MessageEmbed()
      .setTitle("Categories » Text")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Text Commands```")
      .addFields(
       { name: 's' , value: 's', inline: true },
       { name: 's' , value: 's', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")    



//help cmd function
  let v = await  message.channel.send({
        embed: helpembed,
        components: [row1, row2, row3]
    })



//button function

   let collector = v.createButtonCollector(b => b, {time: 300000}) 
      
   collector.on('collect', button =>{
        button.reply.defer()
       if(button.id == 'backbutton'){
           button.message.edit({
             embed: helpembed,
             components: [row1, row2, row3]    
           })
       }      

       if(button.id == 'modbutton'){
           button.message.edit({
             embed: modembed,
             button: backbutton   
           })
       }    

       if(button.id == 'gimmicsbutton'){
           button.message.edit({
             embed: gimmicsembed,
             button: backbutton
           })
       }      

       if(button.id == 'utilitybutton'){
           button.message.edit({
             embed: utilityembed,
             button: backbutton 
           })
       }      

       if(button.id == 'economybutton'){
           button.message.edit({
             embed: economyembed,
              button: backbutton 
           })
       }      

       if(button.id == 'infobutton'){
           button.message.edit({
             embed: infoembed,
             button: backbutton
           })
       }     

       if(button.id == 'funbutton'){
           button.message.edit({
             embed: funembed,
             button: backbutton
           })
       }      

       if(button.id == 'gamebutton'){
           button.message.edit({
             embed: gameembed,
             button: backbutton
           })
       }      

       if(button.id == 'rpbutton'){
           button.message.edit({
             embed: rpembed,
             button: backbutton
           })
       }      

       if(button.id == 'extbutton'){
           button.message.edit({
             embed: extembed,
            button: backbutton
           })
       }      

       if(button.id == 'nsfwbutton'){
           button.message.edit({
             embed: nsfwembed,
             button: backbutton
           })
       }     

       if(button.id == 'redditbutton'){
           button.message.edit({
             embed: redditembed,
             button: backbutton
           })
       }      

       if(button.id == 'textbutton'){
           button.message.edit({
             embed: textembed,
             button: backbutton 
           })
       }                                                             
     
     })

  }
}