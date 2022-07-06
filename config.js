module.exports = {
  Admins: ["788745526018965524"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || "!",
  Port: 3000, 
  SupportServer: "https://discord.gg/WmpCSyf6sH",
  Token: process.env.Token || "OTMwODQzODg1ODcyMjQyNzE4.GIlSdP.0PeA_3whudIpJA3qjn6_JTyw7kC95tjhedspro", 
  ClientID: process.env.Discord_ClientID || "930843885872242718",
  ClientSecret: process.env.Discord_ClientSecret || "4KrRVNEjzyL0ez0OddSg6eialJPMxxkh", 
  Scopes: ["identify", "guilds", "applications.commands"],
  CallbackURL: "/api/callback",
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "weez-node.cf",
    port: 2333,
    pass: "FreeLava", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
