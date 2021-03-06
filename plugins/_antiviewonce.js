let handler = m => m
handler.before = async function (m) {
    if (!DATABASE.data.chats[m.chat].viewonce) return
    let q = m.quoted ? m.quoted : m
    if (q.mtype == 'viewOnceMessage') {
        await this.copyNForward(m.chat, await this.loadMessage(m.chat, q.id), m, false, { readViewOnce: true })
    }
}

module.exports = handler