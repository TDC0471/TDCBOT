module.exports = {
    name: 'lefishe',
    descrption: 'descrption',
    aliases: ['le_fishe','longvid', 'le_fish', 'lefish'],
    cooldown: 86400,
    guildOnly: false,
    usage: ';lefishe',
    myperm:'ATTACH_FILES',
    errmsg: 'le fishe swam away!',

    execute(client, message, args) {
    message.channel.send('Here is a Le fishe for you.' , {files: ['./commands/filestosend/le_fishe.mp4']})    
    },

}