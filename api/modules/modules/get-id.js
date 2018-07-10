const error = require('../../error')
const sendError = require('../../send-error')
const getId = async (req, res) => {
    try {
        let data = await knex('users_modules').select('users.name', 'users.id').innerJoin('users', 'users.id', 'users_modules.userId').where({'users_modules.moduleId': req.params.id || ''})
    res.json({status: true, message: 'Success', data})
    data = null
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error'
        sendError(error, res)
    }
}

module.exports = getId
  