const Discord = require('discord.js');


module.exports = {
    name: 'embed',
    descrption: 'An embed maker.',
    aliases: [],
    cooldown: 0,
    guildOnly: false,
    usage: ';embed',
    //perm: , add these later
    //myperm:,
    
    async execute(client, message, args) {
    
       
        
        const exampleEmbed = new Discord.MessageEmbed()
        
    //add cancel to all this    
        let title;
        let titlerep = 1;
        const msgsent = await message.channel.send('What do you want the title to be?');
        
        while(titlerep === 1){
        
        
        const filter = m => m.author.id === message.author.id;
        const msgtitle = await message.channel.awaitMessages(filter, { max: 1,})
        msgtitle.delete()
        if(msgtitle.size > 256){msgsent.edit('What do you want the title to be? You have too many letters last time(over 256)')}
        if(msgtitle.size < 257){titlerep = 2}
        title = msgtitle.first().content;
        
        exampleEmbed.setTitle(title)
        }

        let URLrep = 1;
        let URLwarning = '.';
        while (URLrep === 1) {
        msgsent.edit('Do you want a title URL? (y/n)' + (URLwarning))
        const filter = m => m.author.id === message.author.id;
        const msgURL = await message.channel.awaitMessages(filter, { max: 1,})
        if(msgURL.first().content === 'Y'){
    msgsent.edit('What do you want your title URL to be?');
    const msg = await message.channel.awaitMessages(filter, { max: 1,})
    exampleEmbed.setURL(msg.first().content);
    URLrep = 2;
    }
    if(msgURL.first().content === 'y'){
    msgsent.edit('What do you want your title URL to be?');
    const msg = await message.channel.awaitMessages(filter, { max: 1,})
    exampleEmbed.setURL(msg.first().content);
    URLrep = 2;
    }
        if(msgURL.first().content === 'N'){URLrep = 2;}
        if(msgURL.first().content === 'n'){URLrep = 2;}
        if(!msgURL.first().content.match(/[YyNn]/g)){URLwarning = ' That is not a valied answer. Answers are (Y/y/N/n)'}
    }

        
        
        let descrptionrep = 1;
        let descrptionwarning = '.';
        while (descrptionrep === 1) {
        msgsent.edit('Do you want a Description? (y/n)' + (descrptionwarning))
        const filter = m => m.author.id === message.author.id;
        const msgDescription = await message.channel.awaitMessages(filter, { max: 1,})
        if(msgDescription.first().content === 'Y'){
    msgsent.edit('What do you want your Description to be?');
    const msg = await message.channel.awaitMessages(filter, { max: 1,})
    exampleEmbed.setDescription(msg.first().content);
    descrptionrep = 2;
    }
        if(msgDescription.first().content === 'y'){
        msgsent.edit('What do you want your Description to be?');
    const msg = await message.channel.awaitMessages(filter, { max: 1,})
    exampleEmbed.setDescription(msg.first().content);
    descrptionrep = 2;
    }
        if(msgDescription.first().content === 'N'){descrptionrep = 2;}
        if(msgDescription.first().content === 'n'){descrptionrep = 2;}
        if(!msgDescription.first().content.match(/[YyNn]/g)){descrptionwarning = ' That is not a valied answer. Answers are (Y/y/N/n)'}
    }
   
   
    //PAST THIS IS FIELDS!!!


    let Field = 1;
    let FieldCount = 1;
    while (Field === 1){
    const filter = m => m.author.id === message.author.id;    
    msgsent.edit('What do you want your number ' + FieldCount + ' field to be? \n If you don\'t want a field(s)/ Your embed is done just say \'done\'.')
    const msg = await message.channel.awaitMessages(filter, { max: 1,})
    /*check if . include works*/if(msg.first().content === 'Done'){return message.channel.send(exampleEmbed)}
    if(msg.first().content === 'DONE'){return message.channel.send(exampleEmbed)}
    if(msg.first().content === 'done'){return message.channel.send(exampleEmbed)}

    msgsent.edit('What do you want your value/descrption of field ' + FieldCount + ' to be?')
    const msg2 = await message.channel.awaitMessages(filter, { max: 1,})
    

    let inline = 1;
    let ifinline = true;
    let inlinewarning = '.';
    while (inline === 1){
    const filter = m => m.author.id === message.author.id;
    msgsent.edit('Do you want field ' + FieldCount + ' to be lined up with the last field? (y/n) ' + inlinewarning)
    const msg3 = await message.channel.awaitMessages(filter, { max: 1,})
            if(msg3.first().content === 'Y'){inline = 2; ifinline = true;}
            if(msg3.first().content === 'y'){inline = 2; ifinline = true;}
            if(msg3.first().content === 'N'){inline = 2; ifinline = false;}
            if(msg3.first().content === 'n'){inline = 2; ifinline = false;}
            if(!msg3.first().content.match(/[YyNn]/g)){inlinewarning = 'That is not a valied answer. Answers are (Y/y/N/n)'}
        



    }
    FieldCount++;
    
        
        
        
        
        
        
       
        
        
        
        
        let embed = new Map();
        embed.set(msg.first().content, [msg2.first().content, ifinline]);
        
       
        
        
        for (let [key, value] of embed) {
        
        if(FieldCount === 26){return message.channel.send('That is the max amount of fields I can send').then(m => m.delete({timeout: 5000})) && message.channel.send(exampleEmbed)}
        
        exampleEmbed
            .addField(key,value[0],value[1])
            
            
            
        }}
        message.channel.send(exampleEmbed)
    

    
},};
