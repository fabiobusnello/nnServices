const sendError = require('../send-error')
const moment = require('moment')
const valida = async (req, res, next) => {
    const now = new Date()
    try {
        const token = await knex('tokens').select('expire').where({token: req.cookies.token || 0}).limit(1)
        if(!token.length) return res.status(401).json({status:false, message:"Token inválido"})
        const expire = new Date(token[0].expire)
        const subtract = Math.abs(expire.getTime() - now.getTime()) / 1000 / 60
        if(subtract<0 || subtract > session)return res.status(401).json({status:false, message:"Token inválido"})
        await knex('tokens').update({expire: moment().add(session, 'm').format('YYYY-MM-DD HH:mm:ss')})
        next()
    } catch (error) {
        sendError(error)
        return res.status(401).json({status: false, message:"Internal error"})
    }
}

module.exports = valida