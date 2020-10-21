module.exports = {
    name: '8ball',
    descrption: 'Gives an answer to any qustion.',
    aliases: ['qustion','8q'],
    cooldown: 5,
    guildOnly: false,
    requirearg: '1',
    usage: ';8ball <Question>.',



    execute(client, message, args) {
        const ball = [':8ball: As I see it, yes. :8ball:', ':8ball: Better not tell you now. :8ball:',  ':8ball: Cannot predict now. :8ball:' , ':8ball: Concentrate and ask again. :8ball:' , ':8ball:  Don’t count on it. :8ball:' , ':8ball: It is certain. :8ball:' , ':8ball: It is decidedly so. :8ball:' , ':8ball: Most likely. :8ball:' , ':8ball: Most likely. :8ball:' , ':8ball: My reply is no. :8ball:' , ':8ball: My sources say no. :8ball:' , ':8ball: Outlook not so good. :8ball:' , ':8ball: Outlook good. :8ball:' , ':8ball: Reply hazy, try again. :8ball:' , ':8ball: Signs point to yes. :8ball:' , ':8ball:  Very doubtful. :8ball:' , ':8ball:  Without a doubt. :8ball:' , ':8ball: You may rely on it. :8ball:' , ':8ball: Yes. :8ball:' , ':8ball: Yes – definitely. :8ball:' , ':8ball: You may rely on it. :8ball:'];

    const index = Math.floor(Math.random() * ball.length)
    if (!args[1]) return message.channel.send('If you want an answer, you first must ask a question.');
    message.channel.send(ball[index])


},    
        
    }