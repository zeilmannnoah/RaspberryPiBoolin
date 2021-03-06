const Discord = require('discord.js');
const Token = require('./token.js');
const { exec } = require('child_process');
const Client = new Discord.Client();

Client.on('ready', () => {
	console.log('Logged in with token: ' + Token.value);
});

Client.on('message', msg => {
	if (msg.startsWith("pi.")) {
		if (msg.content === 'pi.ping') {
			msg.reply('pong');
		}
		else if (msg.content === 'pi.restart') {
			exec('git pull', (err, stdout, stderr) => {
				if(err) {
					msg.reply(stderr);
				}
				else {
					msg.reply("Pulling and restarting app");
					console.log(stdout);
				}
			});
		}
	}
});

Client.login(Token.value)
.catch(err => {
	console.log(err);
});
