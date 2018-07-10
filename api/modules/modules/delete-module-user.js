const error = require('../../error')
const sendError = require('../../send-error')
const deleteModuleUser = async (req, res)=>{
    try {
        const data = await knex('users_modules').where({userId: req.params.userId || '', moduleId: req.params.moduleId || ''}).delete()  
        res.json({status: true, message: 'Success', data})
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error!'
        sendError(error, res)
    }
}

module.exports = deleteModuleUser