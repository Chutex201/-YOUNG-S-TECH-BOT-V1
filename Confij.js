/*

# Base ByGo spider v7
# tube= Tech Go
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐸','🗿']
global.owner = ['2347025012871']
global.ownMain = '2349132283067'
global.NamaOwner = 'YOUNG TECH' //your name
global.sessionName = 'session'
global.connect = true // for qr code do this false
global.namabot = 'YOUNG TECH V1' //don't change
global.author = 'YOUNGPRIEST' //don't change
global.packname = 'YOUNG' //sticker name
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = 'https://whatsapp.com/channel/0029VatsHRW6xCSJaSCH3C0a' //don't change this
global.url2 = 'https://' //Don't change this
global.linkgc = 'https://whatsapp.com/channel/0029VatsHRW6xCSJaSCH3C0a'
global.delayjpm = 3500

global.mess = { // Don't change this
ingroup: 'This feature is for groups by young.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not owner or youngpriest.',
premium: 'You are not a premium user or YOUNG Tech.',
seller: 'This feature can only be used by resellers and young.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by young',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ good Morning ͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ how r u brother༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁this is my location ̥ ̊ ༚👻⃰ꢵ⭑trck ͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑thanks⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► YOUNG Tech- 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ YOUNG - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "YOUNG Tech-- #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
