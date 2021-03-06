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

                    message.channel.messages.delete()

                }
                message.channel.bulkDelete(args[1])
            break;

                /*var zufall = Math.round(Math.random() * 2);

                let SSP = ["Schere", "Stein", "Papier"];
                console.log(SSP[Math.round(Math.random() * 2)]);*/

            case 'schere':
                var min = 7,
                max = 9;
          
                function rand (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                switch (rand(7, 9)) {

                    case 7:
                        message.channel.send('Schere')
                        message.channel.send('Unentschieden... ;D')
                    break;

                    case 8:
                        message.channel.send('Stein')
                        message.channel.send('Du hast Verloren.. haha Viel Glück beim nächsten mal.')
                    break;

                    case 9:
                        message.channel.send('Papier')
                        message.channel.send('Du hast Gewonnen! maaan du kek')
                    break;

                }

            break;

            case 'stein':
                var min = 7,
                max = 9;
          
                function rand (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                switch (rand(7, 9)) {

                    case 7:
                        message.channel.send('Schere')
                        message.channel.send('Du hast Verloren.. haha Viel Glück beim nächsten mal.')
                    break;

                    case 8:
                        message.channel.send('Stein')
                        message.channel.send('Unentschieden... ;D')
                    break;

                    case 9:
                        message.channel.send('Papier')
                        message.channel.send('Du hast Gewonnen! maaan du kek')
                    break;

                }

            break;

            case 'papier':
                var min = 7,
                max = 9;
          
                function rand (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                switch (rand(7, 9)) {

                    case 7:
                        message.channel.send('Schere')
                        message.channel.send('Du hast Gewonnen! maaan du kek')
                    break;

                    case 8:
                        message.channel.send('Stein')
                        message.channel.send('Du hast Verloren.. haha Viel Glück beim nächsten mal.')
                    break;

                    case 9:
                        message.channel.send('Papier')
                        message.channel.send('Unentschieden... ;D')
                    break;

                }

            break;

            default:
                message.channel.send('Fehler, dieser Befehl existirt noch nicht! Bitte den Developer diesen einzufügen!')
            break;

        }

    }

})



bot.login(process.env.token)
