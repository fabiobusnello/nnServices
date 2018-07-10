const companies = async (app) => {
    app.get('/companies', valida, require('./companies'))
}

module.exports = companies