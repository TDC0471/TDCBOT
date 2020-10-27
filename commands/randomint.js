module.exports = {
    name: 'randomint',
    descrption: 'Gives you a random number between 0 and the number you chose.',
    aliases: ['random',],
    cooldown: 0,
    guildOnly: false,
    usage: ';randomint <number>',

    requirenumarg: '1',
    
    

    execute(client, message, args) {
        
            let numberargs;
            function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));};
            
            if (parseInt(args[1] > 1000000000)) return message.channel.send('Put a number equal  or lower than `1000000000`');
            
            if (parseInt(args[1]) < 1) return message.reply('0 is that what you want??'); else {numberargs = parseInt(args[1])};
            message.channel.send('Random number is... ' + getRandomInt(numberargs + 1));
        
    },

}