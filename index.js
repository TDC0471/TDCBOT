const Discord = require('discord.js');
const client = new Discord.Client();
//const token = 'NzU5ODYzNTI5MjI1NzE1NzQz.X3DsDg.xtHU94wJQvWTNr8CEkBETQHMHUk'; 
const logint = process.env.token;
console.log(logint) 

client.on('ready', () => {
     client.user.setActivity("~Help ~Help ~Help ~Help", { type: "PLAYING" });
});


client.on('message', message => { 

	if(message.content.toLowerCase().match('~where am i?')){
        message.reply("IN MY SWAMP NOW GET OUT!");}
})

client.login(logint);