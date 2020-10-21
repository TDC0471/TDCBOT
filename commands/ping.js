module.exports = {
	name: 'ping',
	description: 'Ping!',
	aliases: [],
	cooldown: 0,
	gulidOnly: false,
	usage: ';ping',
	execute(client, message, args) {
	message.channel.send('Pong!')
	
	
	},	
	};	
