const error = require('../../error')
const sendError = require('../../send-error')

const get = async (req, res)=>{
    try {
        const data = await knex('modules').select('name', 'moduleName', 'id', 'icon')
        res.json({status: true, message: "Success", data})
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error!'
        sendError(error, res)
    }
}
module.exports = get