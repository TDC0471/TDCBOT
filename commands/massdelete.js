module.exports = {
    name: 'delete',
    descrption: 'descrption',
    aliases: ['md',],
    cooldown: 10,
    guildOnly: false,
    usage: ';delete <the amount of messages you want the bot to delete>',
    perm: "MANAGE_MESSAGES",
    myperm:"MANAGE_MESSAGES",
    requirenumarg: '1',

    execute(client, message, args) {
     
        let deleteAmount;
        
          
        
        if (parseInt(args[1])> 99) return message.reply('You can only delete 99 messages at a time!');
        if (parseInt(args[1])< 1) return message.reply('I cant delete 0 or less messages'); else {deleteAmount = parseInt(args[1]) + 1};
        message.channel.bulkDelete(deleteAmount, true).then(() => {
        message.channel.send('Cleared ' + args[1] + ' messages!').then(m => m.delete({timeout: 2000}));});
    
    
    },
            
    }

