import { Client, GatewayIntentBits } from 'discord.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent] });


client.on("interactionCreate",(interaction) => 
{
    console.log(interaction);
    interaction.reply("Pong!")
})
client.on("messageCreate",(message) => 
{
    if(message.author.bot) return;
    console.log(message.content);
    message.reply({content:"Hey man how are you",});
});

require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
client.login(token);