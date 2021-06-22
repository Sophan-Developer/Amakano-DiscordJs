const Discord = require('discord.js');
const disbut = require('discord-buttons')

module.exports = async(client, button) => {



if(button.id === 'modbutton') {
  button.defer();

    const modembed = new Discord.MessageEmbed()
      .setTitle("MODERATION")
      .setColor("#fa1616")
      .setDescription(" `These Command Require Certain Permission To Run, Every Member Can't Use These Command` ")
      .addFields(
        { name: 'Ban'  , value: 'Ban a member and give a reason' },
        { name: 'Kick' , value: 'Kick a member and give a reason' },
        { name: 'Mute' , value: 'Mute a member and give a reason' },
        { name: 'Unmute' , value: 'Unmute a member and give a reason' },
        { name: 'Warn' , value: 'Warn a member and give a reason' },
        { name: 'Warncheck' , value: 'Shows previous warnings of an user' },
        { name: 'Removewarn' , value: 'Removes a specific amount of warnings for specific users' },
        { name: 'Slowmode' , value: 'Enable Slowmode' },
        { name: 'Clear' , value: 'Deletes a specific amount of messages' }
      )
      .setFooter(`Requested by ${button.clicker.user.username} | Use the reactions below for navigation `)

    button.message.edit({
      embed: modembed
      })

  }
  
} 


