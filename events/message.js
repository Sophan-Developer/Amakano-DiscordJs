const { prefix } = require("../config.json");
const { Permissions } = require("discord.js");

module.exports = async(client, message) => { //need to be an async function
    let cmd;

    if (message.author.bot) return;
    if (!message.guild) return;
    //if (!message.content.startsWith(prefix)) return; //I make this script a comment because if this is written then you can't run a command without using a prefix

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    //if the message content is *hi* then it will run the hi cmd if not then it will take the args to find the command
    if (message.content === 'hi') {
      cmd = 'hi' // put the command in the cmd variable
    }else{
      cmd = args.shift().toLowerCase();
    }

    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    // If a command is finally found, run the 
    if (command) 
        command.run(client, message, args);
 
}