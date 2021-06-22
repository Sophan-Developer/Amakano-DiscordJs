let Discord = require('discord.js');

module.exports = {
  name: "slowmode",
  aliases: [],
  usage: "slowmode",
  description: "to enable or disable slowmode",
  run: async (client, message) => {

  if (message.author.bot) return;
  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(
      'You dont permission to execute this command.',
    );
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1);
  const seconds = args[0];
  const MAX_SECONDS = 21600;

  if (isNaN(seconds)) {
    return message.channel.send('You need to specify time in seconds!');
  }

  if (seconds > MAX_SECONDS) {
    return message.channel.send(
      `The maximum number of seconds is ${MAX_SECONDS}.`,
    );
  }

  try {
    await message.channel.setRateLimitPerUser(seconds);
    message.channel.send(`Slowmode is now ${seconds}s`);
  } catch (error) {
    message.channel.send('Oops, there is a problem with that command');
    console.log(error);
  }



  }
}