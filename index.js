const fs = require('fs');
const Discord = require('discord.js');
const token = process.env.token;
const {prefix} = require('./config.json')
const humanizeduration = require("humanize-duration")

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cooldowns = new Discord.Collection();




for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => {
	const actvs = [
		"If anyone sees this Dm TheDankchicken.js#0471 and take a pic of it",
		"with ;help",
		"with " + client.guilds.cache.size + " Servers!",
		"with " + client.users.cache.size + " Users!"
	];
	
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    }, 10000);
});


/* client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
	if (message.author.id === Dank) {

	if(args[0] === 'role') {message.guild.roles.cache.forEach(role => console.log(role.name, role.id))}; 
	if(args[0] === 'member') {message.guild.members.cache.forEach(member => console.log(member.user.username, member.id))}
	if(args[0] === 'color') {
		if(!message.member.hasPermission("MANAGE_ROLES")) return

		const myRole = message.guild.roles.cache.get("749282499594682459");
		myRole.edit({
			color: "#000000"})}
			
		}
else return console.log('stop');

	});
	*/

	
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	
	let args = message.content.toLowerCase().substring(prefix.length).split(' ');
	
	const commandName = args[0].toLowerCase();
	
	const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	
	if (command.guildOnly && command.guildOnly === true && message.channel.type === 'dm') {
		return message.reply(`I can\'t execute the ${command.name} command inside DMs!`);
	}

	if (command.perm) {
	if (!message.member.hasPermission(command.perm)) return message.reply('You do not have the permission `' + command.perm + '` to run this command.');}
	
	if (command.myperm) {
	if (!message.guild.me.hasPermission(command.myperm)) return message.channel.send(`I don\'t have the permission ${command.myperm}, so I can\'t do the ${command.name} command.`);}

	if (command.requirearg && !args[command.requirearg]) return message.channel.send('You must put a word `' + command.requirearg + '` word after the prefix.');
	
	if (command.requirenumarg && !args[command.requirenumarg]) return message.channel.send('You must put a number `' + command.requirenumarg + '` word after the prefix.');
	if (command.requirenumarg && !args[command.requirenumarg].match(/^[0-9]/g)) return message.channel.send('You must put a number `' + command.requirenumarg + '` word after the prefix.');

	if (command.requirementionarg && !args[command.requirementionarg]) return message.channel.send('You must mention a user `' + command.requirementionarg + '` word after the prefix.'); 
	if (command.requirementionarg && !args[command.requirementionarg].match(/<@![0-9]*>/g)) return message.channel.send('You must mention a user `' + command.requirementionarg + '` word after the prefix.');

	
//cooldown 
	if (!cooldowns.has(command.name)) {
		
		cooldowns.set(command.name, new Discord.Collection());}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown*1000 || 0);
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now);
		
		
		
		const cooldownembed =  new Discord.MessageEmbed()
		.setColor('#00000')
		.setTitle('Enter the Cooldown Zone')
		.setDescription(`Wait ${humanizeduration(timeLeft.toFixed(1))} before reusing the \`${command.name}\` command. \n The Default Cooldown lime for \`${command.name}\` is \`${humanizeduration(command.cooldown*1000)}\``)
		return message.channel.send(cooldownembed);

	}
	}timestamps.set(message.author.id, now);

	try {
		command.execute(client, message, args,);
		//console.log(command.name + 'executed!')
	}

    catch (error) {
        console.error(error);
		if (command.errmsg){
		return message.channel.send('There was an error trying to execute '+ command.name +'!' + commands.errmsg);
		}
		else{
		message.channel.send('There was an error trying to execute '+ command.name +'!');
		}
    }



	

	
});

client.login(token);
