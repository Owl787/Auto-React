require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.channel.id === process.env.CHANNEL_ID && !message.author.bot) {
    try {
      await message.react(process.env.EMOJI);
    } catch (err) {
      console.error('Failed to react:', err);
    }
  }
});

client.login(process.env.TOKEN);
