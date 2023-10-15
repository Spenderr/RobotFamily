import { REST, Routes } from 'discord.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENTID;

const rest = new REST({ version: '10' }).setToken(token);

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }