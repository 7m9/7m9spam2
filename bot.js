const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561960835275292673")
setInterval(function() {
channel.send(` 37m9 thz best play minecraft`);
}, 30)
})

client.login("NDk3MDMyMTM4NDc5MjM5MTY4.XKD0UA.9rfODKoUp31AAOcig8_nB17S4K8");
