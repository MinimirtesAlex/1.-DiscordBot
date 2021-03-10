const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('Der Bot ist nun Online!')

    bot.user.setActivity('.help', { type: 'PLAYING'}).catch(console.error)
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    let lowercaseargs = args.map(args => args.toLowerCase());

    if(message.content.startsWith(PREFIX)) {

        switch (lowercaseargs[0]){

            case 'help':
                message.channel.send('Hallo ich bin hier der BABO!\n Mein Prefix ist "' + PREFIX + '"!\n Meine Befehle sind:\n - **ping** | wir spielen ein schönes Spiel\n - **clear** [1 - 100] | Aus dem Chanel werden [1 -100] Nachrichten gelöscht\n Das wars! Wenn du noch wünsche hast, dann schreib Alex!')
            break;
            
            case 'ping':
            message.channel.send('Pong!')
            break;

            case 'clear':
                if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Dir fehlt die benötigte Berechtigung! (MANAGE_MESSAGES)')
                if(!args[1]) return message.channel.send('Fehler, bitte gib eine Zahl zwischen 2 und 99 als zweiten Parameter an!')
                //if(lowercaseargs[1].includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü', 'ß')) return message.channel.send('Fehler, bitte gib nur Zahlen an!')
                //if(args[1].includes('!', '"', '§', '$', '%', '&', '/', '(', '{', '[', ']', '}', ')', '=', '?', '`', '´', '*', '+', '~', '#', '-', '_', '.', ':', ',', ';', 'µ', '<', '>', '|', '^', '°', '@', '€')) return message.channel.send('Fehler, bitte gib nur Zahlen an!')
                if(args[1].match('all')) {

                    message.channel.messages.delete

                }
                message.channel.bulkDelete(args[1])
            break;

            case 'ssp':
                var min = 1,
                    max = 3;
                          
                var zz = Math.floor(Math.random() * (max - min + 1)) + min

                if(zz = 1) return message.channel.send('Schere')
                if(zz = 2) return message.channel.send('Stein')
                if(zz = 3) return message.channel.send('Papier')

            break;

            default:
                message.channel.send('Fehler, dieser Befehl existirt noch nicht! Bitte den Developer diesen einzufügen!')
            break;

        }

    }

})



bot.login(process.env.token)
