const {token, PREFIX} = require('config.json')
const Discord = require('discord.js');
const client = new Discord.Client();


 

client.on('ready', () => {
     client.user.setActivity("~Help ~Help ~Help ~Help", { type: "PLAYING" });
     console.log('BOT IS ON!');
});



client.login('NzU5ODYzNTI5MjI1NzE1NzQz.X3DsDg.MWTJpicwoUDu7c05FeOJgTi_thc');