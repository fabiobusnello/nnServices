const model = {
    post: async (params = {}) => {
        const data = await knex('users').select('id', 'password').where(params).limit(1)
        return data
    },
    geraToken: async (params = {}) => {
        const data = await knex('tokens').select('userId').where({userId: params.userId})
        if(!data.length){
            const insert = await knex('tokens').insert(params)
            return insert
        }
        const update = await knex('tokens').update(params).where({userId: params.userId})
        return update;
    }
}

module.exports = model