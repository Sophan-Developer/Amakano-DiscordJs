const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "boobs",
  aliases: ['boob','boobies'],
  usage: "boobie",
  description: "NSFW",
  run: async(client, msg, args) => {

   if (msg.channel.nsfw === true) {
     const image = await api.get("boobs")
     
     msg.channel.send(image);
   } else {
    const notnsfw = new MessageEmbed()
      .setTitle(":no_entry_sign: NSFW")
      .setDescription("The process has been blocked because the current channel is not marked as NSFW!")
      .setColor('#f50000')
      .setFooter("This message disappears in 10 seconds.")
    msg.channel.send(notnsfw).then(msg => {
      msg.delete({timeout: 10000})
    })
    }
  }
}