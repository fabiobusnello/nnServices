const error = require('../../error')
const sendError = require('../../send-error')

const usersByName = async (req, res)=>{
    try {
        const data = await knex('users').select('id', 'name').where('name', 'like', `${(req.params.name === 'false')?'':req.params.name}%`).limit(10)
        res.json({status: true, message: "Success", data})
        
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error!'
        sendError(error, res)
    }
}
module.exports = usersByName