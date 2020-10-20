
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.token;
 

client.on('ready', () => {
     client.user.setActivity("~Help ~Help ~Help ~Help", { type: "PLAYING" });
     console.log('BOT IS ON!');
});

client.on('message', message => {

if(message.content === '!HI'){message.channel.send('work')}


});


client.login(token);

//'NzU5ODYzNTI5MjI1NzE1NzQz.X3DsDg.MWTJpicwoUDu7c05FeOJgTi_thc'