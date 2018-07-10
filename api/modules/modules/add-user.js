const error = require('../../error')
const sendError = require('../../send-error')
const addUser = async (req, res) => {
    try {
        let data = await add(req.body.moduleId, req.body.userId)
    res.json({status: true, message: 'Success', data})
    data = null
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error'
        sendError(error, res)
    }
}

const add = async (moduleId, userId)=>{
    const data = await knex('users_modules').select().where({moduleId, userId}).limit(1)
    if(data.length)return data
    const insert = await knex('users_modules').insert({userId, moduleId})
    return insert
}
module.exports = addUser