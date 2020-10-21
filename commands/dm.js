module.exports = {
    name: 'dm',
    descrption: 'Sends a Anonymous DM to a user you mention.',
    aliases: [],
    cooldown: 0,
    guildOnly: true,
    usage: 'none',
   

    async execute(client, message, args) {
    
        let msg1rep = 1;
        
        let msg2rep = 1;
        
        let dmsend;

        let msgtosend;
        
        while (msg1rep === 1) {
            message.channel.send('Who do you want to send the message to? (Mention the user.) \n Say \'End\' to Cancel');
          const filter = m => m.author.id === message.author.id;
          const msg = await message.channel.awaitMessages(filter, { max: 1,})
          
        
          if(msg.first().content === 'end'){return message.channel.send('ended');}
          if(msg.first().content === ';dm'){return}
          
          if(msg.first().content.match(/<@![0-9]*>/g)){
            
          
          
         
              const mention = msg.first().content.match(/[0-9]+/g).join(" ");
              
            dmsend = client.users.cache.get(mention);
             
            
              
              msg1rep = 2;
            
            }
        
         
        
            
            
        
    }

        while (msg2rep === 1) {
            message.channel.send('What message do you want to send?')
        const filter = m => m.author.id === message.author.id;
        const msg = await message.channel.awaitMessages(filter, { max: 1,})
        
        if(msg.first().content === 'End'){return message.channel.send('ended');}
        if(msg.first().content === 'end'){return message.channel.send('ended');}
        if(msg.first().content === ';dm'){return}

        msgtosend = msg.first().content;
        
        dmsend.send(msgtosend);
        message.channel.send('Sent!');    
           
          msg2rep = 2;
          



}

},



}