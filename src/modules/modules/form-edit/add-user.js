
import formNewModule from ".";

const addUser = async (userId, moduleId, app) => {
    ajax({ url: 'modulesAddUser', body: { userId, moduleId }, method: 'post' })
        .then(data => {
            formNewModule(moduleId)
            alerts({ message: 'Salvo com sucesso!', type: 'success' })
        })
        .catch(err => {
            alerts({ message: 'Houve um erro interno e por isso sua solicitação não foi atendida', type: 'danger' })
        })
}

export default addUser