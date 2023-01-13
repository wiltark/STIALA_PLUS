const aoijs = require("aoi.js")
const token = require("./token.json")


const bot = new aoijs.AoiClient({
token: token.token,
prefix: "$",
intents: ["MessageContent", "Guilds", "GuildMessages"]
})

//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "pingy",
code: `Pong! $pingms
$createApplicationCommand[$guildID;pingy;Pong!;true;slash]`
})

bot.interactionCommand({
name: "pingy",
prototype: 'slash',
code: `
$interactionReply[Pong! $pingms]`
})