const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['AlVLP']
global.ownernomer = "6285161710094"
global.premium = ['6285161710084','62895611160808']
global.packname = 'AlVLP'
global.author = '6285161710084'
global.sessionName = 'Private!18102022'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done ~Oke Desu',
    admin: 'Admin Only!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Premium Only',
    owner: 'Mastah Only',
    group: 'Group Only',
    private: 'Private Chat!',
    bot: 'AlVBOT',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1
}
global.thumb = fs.readFileSync('./image/zens.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
