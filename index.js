const { Client, Collection } = require("discord.js");
const { prefix } = require("./config.json")

const fs = require('fs')
const db = require('quick.db')
const Discord = require('discord.js')


const client = new Client({
    disableEveryone: true
})
 
require('discord-buttons')(client) 




// Collections
client.commands = new Collection();
client.aliases = new Collection();


// Run the command loader
const handlerFiles = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));//searching for .js files in handlers folder

handlerFiles.forEach(handlerFile => { //looping for every file on the handlers folder
  require(`./handlers/${handlerFile}`)(client); //running or importing the handlers
})

//prefix command same like prefix.js but if some mention the client it will respond too
client.on("message",async message => {

  const prefix = await db.get(`prefix_${message.guild.id}`) || '-'

    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
    
      let preembed = new Discord.MessageEmbed()

        .setTitle("**Prefix!**")
        .setDescription(`>w< My Current Prefix Is **${prefix}**`)
        .setColor('#00ff00')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

      message.channel.send(preembed);
    };
})


client.on("guildCreate", (guild) => {
  
  let channelToSend;

  guild.channels.cache.forEach((channel) => {
    
    if(
    
    channel.type === "text" &&
    !channelToSend &&
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
    
    ) channelToSend = channel;
  });
  
  if(!channelToSend) return;
  


  channelToSend.send(new Discord.MessageEmbed()
      .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
      .setTitle("**Thanks For Inviting Me >w<**")
      .setDescription('```yaml\n>w< My Prefix is - and you can change it according to your perseverance```\n ```yaml\nTo get started with help command type -help```\n \n```yaml\nIf you find any bug you can repport it to my Developers by -report```\n ```yaml\nFor support and feature Request you can join my support server to link below >w< ```')
      .setImage('https://cdn.discordapp.com/attachments/854776194561081354/861253841386733628/PicsArt_07-04-08.04.46.jpg')
      .addField('Support Server', '[Click Here](https://discord.gg/jhfMMSUTa4)', true)
      .addField('Invite Ama', '[Click Here](https://dsc.gg/ama)', true)
      .setColor('#ffff1a')
      .setTimestamp()
      .setFooter('Created By @<854005586177687552>')
    )

})

client.on('guildCreate', async guild => {

  const channel = client.channels.cache.get('862375809893531668')
  const channel2 = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))

  const invite = await channel2.createInvite({
    maxAge: 60000,
    maxUses: 100
  })

  let embed = new Discord.MessageEmbed()
  .setTitle('Joined', guild.name)
  .setDescription(`[New Guild Link](${invite})`)
  .addFields(
    { name: 'Server name', value: `${guild.name} - ${guild.id}`, inline: true  },
    { name: 'Server owner', value: `${guild.owner.user.tag} - ${guild.owner.user.id}`, inline: true  },
    { name: 'Member count', value: guild.memberCount , inline: true  }
  )
  .setColor('#ff0000')
  .setThumbnail(guild.iconURL())

  channel.send(embed)
})



client.login(process.env.token);