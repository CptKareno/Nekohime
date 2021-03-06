let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == 1) return conn.reply(m.chat, `${global.ban}`, m)
  let res = await fetch(global.API('zeks', '/api/resep-masak', { q : text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.title) throw json
  await conn.sendFile(m.chat, json.thumb, '', `
${json.title}
${json.url}\n
╭───────────────
❏ *Tingkat:* ${json.tingkat}
❏ *Durasi:* ${json.duration}
❏ *Porsi:* ${json.banyak}\n\n
❏ *Bahan:* ${json.bahan}
❏ *Cara:* ${json.cara}
╰───────────────
`.trim(), m)
}
handler.help = ['resep <makanan>']
handler.tags = ['internet']
handler.command = /^(resep)$/i

handler.limit = true
handler.exp = 0

module.exports = handler