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
});


client.login(process.env.token);