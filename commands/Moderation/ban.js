let Discord = require('discord.js');

module.exports = {
  name: "ban",
  aliases: [],
  usage: "ban",
  description: "to ban member",
  run: (client, message, args) => {
    
     const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      args[0];

    if (!args[0])
      return message.reply(
        "Please specify either the user's ID or mention the user for this command to work."
      );

    if (!member)
      return message.channel.send(
        "I can't seem to find this user in this discord server.."
      );
    if (!member.bannable)
      return message.reply(
        "This user can't be banned. It is either because they are a Mod/Admin, or their highest role is higher than mine, or they are not in the server at all."
      );

    let reason = args.slice(1).join(" ");

    if (!reason) reason = "Unspecified";

    const banembed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("Member Banned")
      .setThumbnail(member.user.displayAvatarURL())
      .addFields(
        {
          name: "Member Banned:",
          value: member
        },
        {
          name: "Banned by Moderator:",
          value: message.author
        },
        {
          name: "For Reason:",
          value: reason
        }
      )
      .setFooter("Time Banned:", message.author.displayAvatarURL())
      .setTimestamp();
    member
      .send(banembed)
      .then(() => {
        message.guild.members.ban(member, { reason: reason });

        message.channel.send(
          `${message.author} that user is successfully banned, check the punish-logs.`
        );
        message.channel.send(banembed);
      })
      .catch(() => {
        message.guild.members.ban(member, { reason: reason });
        message.channel.send(
          `${message.author} that user is successfully banned, check the punish-logs.`
        );
        message.channel.send(banembed);
      });
  }
}

