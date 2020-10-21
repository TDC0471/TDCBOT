const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 0,
	execute(client, message, args,) {
		const data = [];
const { commands } = message.client;


if (!args[1]) {
    data.push('Here\'s a list of all my commands:');
data.push(commands.map(command => command.name).join(', '));
data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

return message.author.send(data, { split: true })
	
	.catch(() => {
		message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
	});
}

const name = args[1].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));


if (!command) {
	return message.reply('that\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.descrption) data.push(`**Description:** ${command.descrption}`);
if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ') || 'none'}`);
if (command.usage) data.push(`**Usage:** ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true });
	},
};