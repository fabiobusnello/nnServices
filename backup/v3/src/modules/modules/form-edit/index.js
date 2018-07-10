import './form-edit.css'
import html from './html/edit.html'
import getUsersModulesById from './get-users-modules-by-id';
import sendNewModule from './send-new-module';
import searchUsers from './serach-users';
import showModules from '../show-modules';

const getModule = async (moduleId) => {
    const { data } = await ajax({ url: `moduleById/${moduleId}` })

    $('[name="name"]').val(data[0].name)
    $('[name="moduleName"]').val(data[0].moduleName)
    $('[name="icon"]').val(data[0].icon)
    $('[name="id"]').val(data[0].id)

    document.querySelector('#form-new-module').onsubmit = (e) => {

        ajax({ url: 'modules', method: 'put', body: { name: e.target.name.value, moduleName: e.target.moduleName.value, icon: e.target.icon.value, id: e.target.id.value } })
            .then(data => {
                showModules()
                alerts({ message: '<strong><i class="far fa-smile fa-2x"></i></i></strong> Salvo com sucesso!', type:'success' })
            })
            .catch(err => {
                console.log('modules/form-edit/send-new-module.js: ', err)
                alerts({ message: '<strong><i class="far fa-frown fa-2x"></i></strong> Houve algum erro e infelismente sua solicitação não pode ser atendida! desculme-nos...' })
            })
        return false
    }
}

const formNewModule = (moduleId) => {
    $(".modal-backdrop").remove()
    document.querySelector("#edit-module-container").innerHTML = html
    $("#modal-new-module").modal('show')
    if (moduleId) {
        getModule(moduleId)
        getUsersModulesById(moduleId)
        return searchUsers(moduleId)
    }
    sendNewModule()
}

export default formNewModule