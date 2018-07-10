const getModulesUsers = async (params = {}) => {
    const userToken = await knex('tokens').select('userId').where({token: params.token}).limit(1)
    const modulesUser = await knex('modules').select(knex.raw('modules.name, modules.moduleName, modules.icon, modules.id')).innerJoin('users_modules', 'modules.id', 'users_modules.moduleId').where({userId: userToken[0].userId, "modules.status": '1'})
    return modulesUser
}

module.exports = getModulesUsers