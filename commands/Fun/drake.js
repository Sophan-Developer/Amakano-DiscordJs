const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
 name: "drake",
 aliases: [],
 usage: "drake",
 description: "meme",
 run: async(client, message, args) => {

const userd = args[0]
        const user22 = args[1]
        const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake/?text1=${userd}&text2=${user22}`);
            let Image = await res.buffer();
            const cmm = new Discord.MessageAttachment(Image);
            message.channel.send(cmm);

 }
}