import htmlUsers from './html/user-modules.html'
import deleteUser from './delete-user'

const getUsersModulesById = async (id) => {
    document.querySelector('#users-modules').innerHTML = htmlUsers
    const { data } = await ajax({ url: `modules/${id}` })
    createList({
        el: '#tbody-user-modules',
        array: data,
        colums: ['name'],
        delete: (userId, e) => deleteUser(userId, id, e),
        actionParams: 'id'
    })
}

export default getUsersModulesById