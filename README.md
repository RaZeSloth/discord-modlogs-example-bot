# Discord-Modlogs

A package to make moderation easier! Uses discord.js v13

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install discord-modlogs.

```bash
npm i discord-modlogs
```

## Usage

```javascript
const logs = require("discord-modlogs");

//guildBanAdd event

client.on("guildBanAdd", async (ban) => {
  logs.guildBanAdd(client, ban, {
    chid: "your channel id here", //required
  });
});
```

## Events Supported

Currently we support the following events:

1. **channelCreate**: Emitted whenever a channel is created.
2. **channelDelete**: Emitted whenever a channel is deleted.
3. **channelPinsUpdate**: Emitted whenever the pins of a channel are updated.
4. **channelUpdate**: Emitted whenever a channel is updated - e.g. name change, topic change.
5. **emojiCreate**: Emitted whenever a custom emoji is created in a guild.
6. **emojiDelete**: Emitted whenever a custom guild emoji is deleted.
7. **emojiUpdate**: Emitted whenever a custom guild emoji is updated.
8. **guildBanAdd**: Emitted whenever a member is banned from a guild.
9. **guildBanRemove**: Emitted whenever a member is unbanned from a guild.
10. **guildMemberAdd**: Emitted whenever a user joins a guild.
11. **guildMemberRemove**: Emitted whenever a member leaves a guild, or is kicked.
12. **guildMembersChunk**: Emitted whenever a chunk of guild members is received (all members come from the same guild).
13. **messageUpdate**: Emiited whenever a message was updated.
14. **inviteCreate**: Emitted whenever an invite is created.
15. **inviteDelete**: Emitted whenever an invite is deleted.

## Note

Example bot can be found here- [Example Bot](https://github.com/ishandev2004/discord-modlogs-example-bot)

## Support Server

Nope but you can join my youtube server for help: [Join here](https://discord.gg/pjCgJxFvsv)

My youtube channel if you want to learn discord.js: [Sub here](https://www.youtube.com/channel/UCOlfREuwZ1tLGsf9BLyM8gA)

## License

[MIT](https://choosealicense.com/licenses/mit/)
