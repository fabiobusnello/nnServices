const modules = async (app)=>{
    app.get('/modules', valida,  require('./get-modules'))
    app.get('/modulesUser', valida,  require('./get-modules-from-users'))
    app.get('/modules/:id', valida,  require('./get-id'))
    app.get('/moduleById/:id', valida, require('./get-module-by-id'))
    app.delete('/modules/:moduleId/:userId', valida, require('./delete-module-user'))
    app.post('/modules', valida, require('./create-module'))
    app.post('/modulesAddUser', valida, require('./add-user'))
    app.put('/modules', valida, require('./update'))
}

module.exports = modules