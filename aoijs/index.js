const conf = require("./config.json");
const { Panel } = require("@akarui/aoi.panel")
const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
token: conf.token,
prefix: "$",
intents: ["MessageContent", "Guilds", "GuildMessages"]
})

const panel = new Panel({
    username: conf.userr,
    password: conf.password,
    secret: "aoijs",
    port: 3000,
    bot: bot,
    mainFile: "./index.js",
    commands: "./commands"
})
panel.loadPanel()

panel.onError()


bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")