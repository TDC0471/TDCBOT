module.exports = {
name: 'invite',
descrption: 'will give you the invite link for this bot',
aliases: [],
cooldown: 0,
guildOnly: false,
usage: ';invite',
execute(client, message, args) {
const Discord = require('discord.js');
const invitebed = new Discord.MessageEmbed().setColor("#000000").setTitle('Invite page!').addField('Link Below','[To invite press here](https://discord.com/oauth2/authorize?client_id=724766895521398827&scope=bot&permissions=1073217023)')
message.channel.send(invitebed)}  
}