const sendNewModule = () => {
    document.querySelector('#form-new-module').onsubmit = (e) => {
        alerts({ message: '<strong>Olá! </strong> Criando novo Módulo, após o carregamento o sistema será reiniciado.', type: 'primary' })
        ajax({ url: 'modules', method: 'post', body: { name: e.target.name.value, moduleName: e.target.moduleName.value, icon: e.target.icon.value } })
            .then(data => {
                location.reload()
            })
            .catch(err => {
                console.log('modules/form-edit/send-new-module.js: ', err)
                alerts({ message: '<strong><i class="far fa-frown fa-2x"></i></strong> Houve algum erro e infelismente sua solicitação não pode ser atendida! desculme-nos...' })
            })
        return false
    }
}

export default sendNewModule