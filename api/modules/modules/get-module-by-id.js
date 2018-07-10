const error = require('../../error')
const sendError = require('../../send-error')
const getModuleById = async (req, res) => {
    try {
        let data = await knex('modules').select('name', 'id', 'icon', 'moduleName').where({id: req.params.id || ''})
    res.json({status: true, message: 'Success', data})
    data = null
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error'
        sendError(error, res)
    }
}

module.exports = getModuleById
  