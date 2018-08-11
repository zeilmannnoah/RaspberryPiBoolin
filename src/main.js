const Discord = require('discord.js');
const Token = require('./token.js');
const Client = new Discord.Client();

console.log("change");

Client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}!');
});

Client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

console.log("Loggin in with token: " + Token.value);

Client.login(Token.value)
.catch(err => {
	console.log(err);
});
