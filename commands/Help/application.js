const {MessageMenuOption, MessageMenu, MessageButton,  MessageActionRow } = require("discord-buttons");
const Discord = require ('discord.js')

let questions = [
    "**Why do you want to take this role**",
    "**What will you help with**",
    "**How much time will you be able to give us**",
    "**Which programming languages do you know**",
    "**How old are you**"
]

module.exports = {
  name: "application",
  aliases: ['form'],
  usage: "application",
  description: "to apply for any position in server",
  run: async(client, message, clickButton, args) => {

//options
//admin
  let adminoption = new MessageMenuOption()
    .setLabel('Admin')
    .setEmoji('🧑‍💼')
    .setValue('menuid')
    .setDescription("Has Full Permission")

//mod
  let modoption = new MessageMenuOption()
    .setLabel('Admin')
    .setEmoji('🔨')
    .setValue('menuid1')
    .setDescription("Has Ban/Kick Members Permission")

//helper
  let helperoption = new MessageMenuOption()
    .setLabel('Helper')
    .setEmoji('👀')
    .setValue('menuid2')
    .setDescription("Has Warn Members Permission")    

let select = new MessageMenu()
    .setID('customid')
    .setPlaceholder('Click Me For Options :D')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(adminoption, modoption, helperoption) 

  message.channel.send("Select role to apply.", select)       

  }
}
