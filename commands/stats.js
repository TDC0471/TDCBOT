module.exports = {
    name: 'stats',
    descrption: 'Gives you the stats of this bot.',
    aliases: [],
    cooldown: 10,
    guildOnly: false,
    usage: ';stats',
    

    execute(client, message, args) {
        const Discord = require('discord.js');
        const humanizeduration = require("humanize-duration")
        const uptime = humanizeduration(client.uptime)
        const Statembed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Stats for Incogware")
        .addField('`Developer`' , '`TheDankchicken.js#0471`')
        .addField('`Servers`' , '`'+ client.guilds.cache.size +"`" , true)
        .addField('`Users`' , '`'+ client.users.cache.size +"`" , true)
        .addField('`Ping`' , '`' + client.ws.ping + 'ms`' , true)
        .addField('`Uptime since last update`' , '`' + uptime + '`' , false);
        message.channel.send(Statembed);    
    },

}