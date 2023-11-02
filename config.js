const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2347045493336"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Mah0_san:Strawcake12@cluster0.c1uuysc.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'mrvlsprk123@gmail.com'
global.github = 'https://github.com/Mah0-san/XLICON-MD'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/mah0_san/' // add your username
global.sudo = process.env.SUDO || '2349156088439' 
global.devs = '2347045493336';
global.website = 'https://github.com/Mah0-san/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://wallpapers.com/images/high/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJJWWRrUW5BSTVtQzk2c0EwRmJnbDVzQ0VnU3QwQ1U2ZGZmdHh2cW5VZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkEzanA3bHEvY1NzZVBFL0FNeTFkSkwwbm9kenF6a1NKYm5ydEk1RWFRTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSWVHTFR2aW9FSUlXTjFiaFczZG53VG54V3lFMnhtTnRzVnZDT0NTNldnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlM2h1STJDcWtqOVQrczAreUNqVzJOdVpQNjRESWlza3BldE5oWkw3SkVFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMUndWYXRTVWQ1Wi9xc0VYcC9Oc0hrUnVKeTBweDNKV0owdmV1L2MyazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRqcE94MUVXUC91MTJ0V3J5d1pWdlB1TVphRUEzTVVVTDkrQjBxL1pNVGM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUlN6MGJSdHFlZzl6ZnVCUjlPS2I4ZlJ6WHNpb0IxUUQ2YnJqZlNyUUROTHcyNTErcWx5bmpJUTF3UzN6am00WU9NSkt6V3pwZG9kSmFEZEFnbXJoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyOCwiYWR2U2VjcmV0S2V5IjoiMjhqeU8wTWE0aUhIL05ZQ0VHTE9yM21PWVR2SW5SS2FpV2J0OXAyR3MzUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWEtDaktTaV9UaVdaYkxkRU9BZ0YyUSIsInBob25lSWQiOiJiZDI5OGUwNi1hMDc2LTQ0NDEtOTE1Zi02NTZiYjMyODYyZjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFZJZEFOdVhzdWpxbnZqaks0MllXNmd4N0VrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZkZYZ3drZnp4dGsxR3dDSUpWb0lFRVcyeFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYjIwcWdERUtXcHRha0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUxYUZvNmF2UWsyZHRKcDVaMzhGTXpjRnhINDByN2FWbjhLbFdvSDd5SEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRLZjN5Z2ZTRVNubzJvTTM4cjZwOExkVlVwM3hFcllGK2F1clJqbm5FaUZmWFdCd1FqaURuZlJLcXF3V21GODFiZDRZR0k0TjBZL0lpV1k2NFFOM0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJORFV6YUJ4eHd6bCtWbEdrK1U2eWU3a2VveDZuK3hvWkhtZ1hWUDl3b1htakdOMS8wTGZ1b3VURHVJZ2RHMzFJa3JqaC9KSU41OXF2MFZYN1NuSGlnUT09In0sIm1lIjp7ImlkIjoiMjM0NzA0NTQ5MzMzNjoxNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1NDkzMzM2OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJOV2hhT21yMEpObmJTYWVXZC9CVE0zQmNSK05LKzJsWi9DcFZxQis4aHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTc0Njk2MDh9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '𝚳𝐒',
  packname:  process.env.PACK_NAME || '𝚳ah0_san',
   
  botname:   process.env.BOT_NAME === undefined ? "Nightmare-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Mah0_san' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '/' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'NEZUKO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
