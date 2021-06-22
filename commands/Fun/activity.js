const Discord = require('discord.js');

module.exports = {
 name: "activity",
 aliases: [],
 usage: "activity",
 description: "activity",
 run: async(client, message, args) => {

 const activities = {
    '1': '755827207812677713',
    '2': '773336526917861400',
    '3': '755600276941176913',
    '4': '814288819477020702',
    '5': '83201258602325610'
  }   

const channel = message.mentions.channels.first();
    if (!channel) return message.channel.send('mention channel');
    if (channel.type !== 'voice') return message.channel.send('voice channel please');
    const activity = args[1].match(/[1-4]/);
    if (!activity) return message.channel.send('please specify a number')
    client.api.channels[channel.id].invites.post({
      data: {
        target_type: 2,
        target_application_id: activities[activity[0]]
      }
    })
      .then(invite => {
        if (!invite) return message.channel.send('unable to create')
        message.channel.send(`Click to play! https://discord.gg/${invite.code}`)
      })
      .catch(err => {
        message.channel.send('unable to create')
        console.error(err)
      })
 }
}