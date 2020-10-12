const {get} = require("snekfetch");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get('https://glitch.com/~rr-pro');
}, 280000);

const Discord = require('discord.js');
const bot = new Discord.Client;

const token = 'NzYzNDI1MzAwMzEwMTMwNjk5.X33hNw.Ec63cB6pqD1FHWSrh_RF4yTqtwU';

bot.on('ready', () => {
    console.log('Bot sudah online');
});

bot.on('guildMemberAdd', member =>{
 const channel = member.guild.channels.cache.find(ch => ch.name === 'lobby');

 if(!channel) return;
 
 if(member.guild.name === 'Rombongan Ruwed'){
     channel.send(`Hai ${member} sayang,  Selamat Bergabung Di server Discord Rombongan Ruwed`);
 }
}

);

bot.login(process.env.BOT_TOKEN);
