const Discord = require("discord.js");
const client = new Discord.Client({
  intents: 32767,
});
const config  = require("./config.json")
const prefix = config.prefix
const c = config.channel
const logs = require("discord-modlogs");
client.on("ready", () => {
  console.log("literally anything you want goes here");
});
client.on("messageCreate", (message) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send("pong!");
  }
});
client.on("channelCreate", async (channel) => {
  logs.chcreate(client, channel, {
    chid: c,
  });
});
client.on("channelDelete", async (channel) => {
  logs.chdel(client, channel, {
    chid: c,
  });
});
client.on("channelPinsUpdate", async (channel, time) => {
  logs.chPinsUpdate(client, channel, time, {
    chid: c,
  });
});
client.on("channelUpdate", async (oldChannel, newChannel) => {
  logs.chUpdate(client, oldChannel, newChannel, {
    chid: c,
  });
});
client.on("emojiDelete", async (emoji) => {
  logs.edel(client, emoji, {
    chid: c,
  });
});
client.on("emojiCreate", async (emoji) => {
  logs.eCreate(client, emoji, {
    chid: c,
  });
});
client.on("emojiUpdate", async (olEemoji, newEmoji) => {
  logs.eUpdate(client, olEemoji, newEmoji, {
    chid: c,
  });
});
client.on("guildBanAdd", async (ban) => {
  logs.guildBanAdd(client, ban, {
    chid: c,
  });
});
client.on("guildBanRemove", async (ban) => {
  logs.guildBanRemove(client, ban, {
    chid: c,
  });
});

client.on("guildMemberAdd", async (member) => {
  logs.guildMemberAdd(client, member, {
    chid: c,
  });
});
client.on("guildMemberRemove", async (member) => {
  logs.guildMemberRemove(client, member, {
    chid: c,
  });
});
client.on("guildMemberChunk", async (members, guild) => {
  logs.guildMemberChunk(client, guild, members, {
    chid: c,
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  logs.guildMemberUpdate(client, oldMember, newMember, {
    chid: c,
  });
  // console.log(newMember);
  // console.log(oldMember);
});

client.login(config.token);
