import formNewModule from './form-edit';
import modulesContents from './modules-contents.html'

const showModules = async ()=>{
    $(".modal-backdrop").remove()
    document.querySelector('#contents').innerHTML = modulesContents
    $('#module-container').show('fast')

    document.querySelector('#add-modules').onclick = ()=>{
        formNewModule()
    }

    const { data } = await ajax({ url: 'modules' })
    createList({
        el: '#tbody-modules',
        array: data,
        colums: ['name', 'moduleName', 'icon'],
        actionParams: 'id',
        action: e=>formNewModule(e)
    })
}

export default showModules