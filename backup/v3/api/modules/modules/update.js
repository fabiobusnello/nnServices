const fs = require('fs')
const error = require('../../error')
const sendError = require('../../send-error')
const build = require('./build')
const updateModule = (moduleId, moduleName) => {
    return new Promise((resolve, reject) => {
        knex('modules').select('moduleName').where({ id: moduleId }).limit(1)
            .then(data => {
                fs.rename(`${__dirname}/../../../src/modules/${data[0].moduleName}`, `${__dirname}/../../../src/modules/${moduleName}`, (err) => {
                    if (err) return reject(err)
                    if(moduleName === data[0].moduleName)return resolve(true)
                    build().then(resolve).catch(reject)
                })
            })
            .catch(reject)
    })
}
const update = async (req, res) => {
    try {
        await updateModule(req.body.id, req.body.moduleName)
        const data = await await knex('modules').update({ moduleName: req.body.moduleName, name: req.body.name, icon: req.body.icon }).where({ id: req.body.id })
        res.json({ status: true, message: 'Success', data })
    } catch (err) {
        sendError(err)
        error.httpStatus = 500
        error.message = 'Internal error!'
        sendError(error, res)
    }
}

module.exports = update