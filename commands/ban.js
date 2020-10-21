module.exports = {
name: 'ban',
descrption: 'Bans the user you mention',
aliases: [],
cooldown: 1,
guildOnly: false,
usage: ';ban <user> <reason>',
perm: 'BAN_MEMBERS',
myperm: 'BAN_MEMBERS',
requirementionarg: 1,


execute(client, message, args) { 
    const banslicehelper = parseInt(5 + args[1].length);
    const banreason = args.join(" ").slice(banslicehelper);
    const user = message.mentions.users.first();
    const member = message.guild.member(user);
    const USERNAME = member.user.username;
    
    if (member.hasPermission('ADMINISTRATOR')) return message.channel.send('I can\'t ban users that have the `ADMINISTRATOR` Permission.');
    if (member.hasPermission('BAN_MEMBERS')) return message.channel.send('I can\'t ban users that have the `BAN_MEMBERS` Permission.');
    
    member.ban({reason: banreason}).then(() => {
        (message.channel.send(USERNAME + ' was Banned because: ' + banreason))
    
    }).catch(err =>{
    message.reply("I was unable to ban that user. This might be the reason why: My role is lower than the user who you wanted to ban.");
    console.log(err);
    })
             
    },
    }