module.exports = {
    name: 'kick',
    descrption: 'kick the user you mention',
    aliases: [],
    cooldown: 1,
    guildOnly: false,
    usage: ';kick <user>',
    perm: 'KICK_MEMBERS',
    myperm: 'KICK_MEMBERS',
    requirementionarg: 1,
    
    
    
execute(client, message, args) {{    
const kickslicehelper = parseInt(5 + args[1].length);
const kickreason = args.join(" ").slice(kickslicehelper);
const user = message.mentions.users.first();
const member = message.guild.member(user);
const USERNAME = member.user.username;

if (member.hasPermission('ADMINISTRATOR')) return message.channel.send('I can\'t kick users that have the `ADMINISTRATOR` Permission.');
if (member.hasPermission('KICK_MEMBERS')) return message.channel.send('I can\'t kick users that have the `BAN_MEMBERS` Permission.');

member.kick({reason: kickreason}).then(() => {
    (message.channel.send(USERNAME + ' was Kicked because: ' + kickreason))

}).catch(err =>{
message.reply("I was unable to kick that user. This might be the reason why: My role is lower than the user who you wanted to kick.");
console.log(err);
})
         
}
},   
}   
