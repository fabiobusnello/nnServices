
const moment = require('moment')
const model = require('./model')
const geraToken = async (userId = Number)=>{
    const expire = moment().add(session, 'm').format('YYYY-MM-DD HH:mm:ss')
    const token = sha256(moment().format('x'))
    await model.geraToken({token, expire, userId})
    return token
}

module.exports = geraToken