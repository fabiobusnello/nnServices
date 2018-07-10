const users = async (app) => {
    app.get('/usersByName/:name', valida, require('./users-by-name'))
}

module.exports = users