const token = require("./config.json");
const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: token.token,
prefix: "$",
intents: ["MessageContent", "Guilds", "GuildMessages"]
})

//Events
bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./aoijs/commands/")