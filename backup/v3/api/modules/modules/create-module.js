const fs = require('fs')
const error = require('../../error')
const sendError = require('../../send-error')


const build = require('./build')

const indexJs = (moduleName) => `const component = () => {
    return \`<div style="background-color:#fff">${moduleName}</div>\`
}
const ${moduleName} = ()=>{
    document.querySelector(".contents").innerHTML = component()
}

export default ${moduleName}`

const moduleExist = async (moduleName) => {
    return new Promise((resolve, reject) => {
        fs.access(`${__dirname}/../../../src/modules/${moduleName}`, (err, data) => {
            if (err) return resolve(false)
            return resolve(true)
        })
    })

}

const newModule = async (moduleName) => {
    const moduleJsContext = indexJs(moduleName)
    return new Promise((resolve, reject) => {
        fs.mkdir(`${__dirname}/../../../src/modules/${moduleName}`, (err) => {
            if (err) return reject(err)
            fs.writeFile(`${__dirname}/../../../src/modules/${moduleName}/index.js`, moduleJsContext, err => {
                if (err) return reject(err)
                fs.writeFile(`${__dirname}/../../../src/modules/${moduleName}/${moduleName}.css`, '', err => {
                    if (err) return reject(err)
                    return resolve(true)
                })
            })
        })
    })
}

const createModule = async (req, res) => {
    const { moduleName, name, icon } = req.body
    const exists = await moduleExist(moduleName)

    if (!exists && moduleName && name && icon) {
        try {
            await newModule(moduleName)
            await knex('modules').insert({ moduleName, name, icon })
            await build()
            res.json({ status: true, message: "Success" })
        } catch (err) {
            error.httpStatus = 500
            error.message = "Internal error"
            sendError(err)
            sendError(error, res)
        }

    } else {
        res.json({ status: false, message: "Module already exists or data invalid" })
    }
}

module.exports = createModule