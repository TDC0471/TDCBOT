module.exports = {
    name: 'repeat',
    descrption: 'Make\'s it look like the bot said what you told it too.',
    aliases: [],
    cooldown: 5,
    guildOnly: false,
    usage: ';repeat <what you want the bot to repeat>',
    

    execute(client, message, args) {

         if (!args[1]) return message.channel.send('Give me something to repeat'); else {message.delete();};
        (message.channel.send(args.join(" ").slice(6)));
        
    },

}