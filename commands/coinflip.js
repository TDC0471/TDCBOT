module.exports = {
    name: 'coinflip',
    descrption: 'Flips a coin!',
    aliases: ['flip',],
    cooldown: 5,
    guildOnly: false,
    usage: ';coinflip',


    execute(client, message, args) {


        const ball = [':coin: Heads :coin:',':coin: Tails :coin:',];

    const index = Math.floor(Math.random() * ball.length)
    message.channel.send(ball[index])

        
    },

}