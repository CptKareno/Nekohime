let handler = async (m, { conn, args }) => {
    let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
    let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
    for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  }
  handler.help = ['mkick', '-'].map(v => v + ' @user')
  handler.tags = ['group']
  handler.command = /^(mkick|\-)$/i
  handler.owner = false
  handler.mods = true
  handler.premium = false
  handler.group = true
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = true
  
  handler.fail = null
  
  module.exports = handler
  