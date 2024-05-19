let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ` ✨🤍➢ 𝐀𝐍𝐎𝐓𝐄𝐍𝐒𝐄 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀𝐒  ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 
🌱🤍 𝙳𝙴𝚂𝙿𝙸𝙴𝚁𝚃𝙴𝙽 𝙿𝙻𝙰𝙽𝚃𝙰𝚂 🤍🌱 \n\n ${oi}\n\n 🌱➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🌱≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐀𝐦𝐩𝐚𝐫𝐢𝐭𝐨 𝐁𝐨𝐭 ✨🤍 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
