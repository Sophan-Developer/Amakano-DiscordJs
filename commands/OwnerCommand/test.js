const discord = require('discord.js');


module.exports = {
 name: "t",
 aliases: [],
 usage: "test",
 description: "for test",
 run: async(client, message, args) => {

  if (message.author.id != message.guild.ownerID) {
    const noOwner = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username}#${message.author.discriminator}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle("Ownership Only:")
      .setDescription(
        `You have been stopped from forming a server via ${client.user.username} as you are missing ownership.`
      )
      .setColor(0xff0000)
      .setFooter("Prefix: [-]");
    message.channel.send(noOwner);
  }
}
}