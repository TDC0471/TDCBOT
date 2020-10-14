//SHRAk
// The maker is TheDankchickenYT //beta testers are KdogeUCH(on YT) and Aki

//start up stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzEyMzA4OTE3NjY4OTM3NzQ4.XsPrlg.Q66dhcKbyLtvguIH05KHiOoJU7A'; 
//the time/date
const TheDate = new Date(Date.now())
//const for the "mock" message.channel.send(`${mention} Does not suck!`);
//const mention = message.mentions.members.first();

//how many milsecs in the meaning to the univers thing
const X = 500

//true/flase for filter
//do that here


//SHRAk Tube embed
const TubeEmbed = new Discord.MessageEmbed()
.setColor('#599450')
.setTitle('SHRAkTube Popular List')
.setAuthor('SHRAk & Co')
.setThumbnail('https://imgur.com/olC8S47')
.addField("The Best Vid", "[Mini SHRAk in a nutshell](https://www.youtube.com/watch?v=BF55VLy3IJM)", false)
.addField("Runner Up","[MLG SHRAk](https://www.youtube.com/watch?v=9pFIHKHEIf0)", false)
.addField("Third","[SHRAk Memes(Clean)](https://youtu.be/UJx9oAwIUl4?t=69)", false)
.setImage('https://imgur.com/lVV7lKK')
.setImage('https://imgur.com/LPb2Zll')
.setFooter('Today at SHRAk OClock');


//embed for ~help
const HelpEmbed = new Discord.MessageEmbed()
.setColor("#599450")
.setTitle("**SHRAk Command List**")
.addField(":slight_smile: Fun Commands", "**  ~Fun Cmods**" , true)
.addField(":question: Info Cmods", "**  ~Info Cmods**", true)


//embed for ~fun Cmods
const Funembed = new Discord.MessageEmbed()
.setColor("#599450")
.setTitle(":slight_smile: Fun Commands")
.addField("Use Prefix ~" , "SHRAkTube `,` Where am i? `,` \n ឵឵ \n \n Support by Subbing on YT to TheDankchickeN" , true)
//embed for ~info cmods
const Infoembed = new Discord.MessageEmbed()
.setColor("#599450")
.setTitle("All Info Cmods")
.setTitle("~Get Time" , "Gets you the time", true)
.setTitle("~Who made this?" , "Tells who made the bot")

//embed for ~who made this
const WhoMadeThisEmbed = new Discord.MessageEmbed()
.setColor("#599450")
.setTitle("Who made this?")
.addField(" ⃟⃝...#9034 Aka." , "[TheDankchickenYT](https://www.youtube.com/channel/UCMx6XuDhWJ2M-eWFypfeoyw?view_as=subscriber) \n To support me go to \n https://www.patreon.com/SHRAk", false)

//embed for ~Give Time
const TimeEmbed = new Discord.MessageEmbed()
.setColor("#599450")
.setTitle("The Time")
.addField(TheDate,"That is the Date" , false)

//start up
client.login(token); 


//client.user.setPresence({ status: 'idle' }); the status no work tho
//The bot status is now playing out of my swamp
client.on('ready', () => {
     client.user.setActivity("~Help ~Help ~Help ~Help", { type: "PLAYING" });
});

//Make the bot change it color when join sever
//client.on("guildCreate", guild => { message.guild.roles.cache.get('712309653257846825').setColor("#599450")

//});


//cmods
client.on('message', message => { 

	if(message.content.toLowerCase().match('~where am i?'))
		message.reply("IN MY SWAMP NOW GET OUT!");

	else if(message.content.toLowerCase().match('~shraktube'))
		message.channel.send(TubeEmbed)
	
	else if(message.content.toLowerCase().match('~who made this?'))
		message.channel.send(WhoMadeThisEmbed);
	
	else if(message.content.toLowerCase().match('~help'))
		message.channel.send(HelpEmbed)// add more here later
	
	else if(message.content.toLowerCase().match('~fun cmods'))
		message.channel.send(Funembed)// put cmods here

	else if(message.content.toLowerCase().match('~info cmods'))
		message.channel.send(Infoembed)

	else if(message.content.toLowerCase().match('~get time'))
			message.reply(TimeEmbed)
	
	

	




});

//712309653257846825
