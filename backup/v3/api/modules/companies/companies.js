const error = require('../../error')
const sendError = require('../../send-error')

const companies = async (req, res)=>{
    try {
        const data = await knex('companies').select()
        res.json({status: true, message: "Success", data})
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error!'
        sendError(error, res)
    }
}
module.exports = companies