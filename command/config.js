const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
sanzy: 'https://zeroyt7-api.xyz',
zenz: 'https://zenzapi.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'gysnzbsja',
'https://zenzapi.xyz': 'f2116e96b4',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Owner - Indra>_<'
global.owner = ['6289667644225']
global.packname = 'Indra>_<'
global.author = 'HelloWord'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Fiturnya Buat Admin Doanh',
    botAdmin: 'Jadiin Bot Admin Dulu Biar Bisa',
    owner: 'Lu Bukan Owner Gw',
    group: 'Di Grup Ae Banh',
    private: 'Cht Pribadi Ae Klo Disini Malu>_<',
    bot: 'Cuma Buat Bot',
wait: 'Loading...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
