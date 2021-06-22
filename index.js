const { Client, Collection } = require("discord.js");
const { prefix } = require("./config.json")

const fs = require('fs')




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



client.login(process.env.token);