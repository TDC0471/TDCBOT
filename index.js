const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzEyMzA4OTE3NjY4OTM3NzQ4.XsPrlg.Q66dhcKbyLtvguIH05KHiOoJU7A'; 


client.on('ready', () => {
     client.user.setActivity("~Help ~Help ~Help ~Help", { type: "PLAYING" });
});


client.on('message', message => { 

	if(message.content.toLowerCase().match('~where am i?')){
        message.reply("IN MY SWAMP NOW GET OUT!");}
})
