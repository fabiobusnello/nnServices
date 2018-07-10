import login from "../login";

const logOut = () => {
    $(".log-out").click(() => {
        $(".sidebar").animate({ 'left': '-200px' }, 200)
        $('#navbar-company').animate({ "margin-top": '-=100px' }, 200, () => {
            $('.contents').remove()
            $('#init').remove()
            login()
        })
    })
}

const changeModules = async () => {
    const { data } = await ajax({ url: 'modulesUser' })
    data.forEach(modules => {
        import(`../${modules.moduleName.toLowerCase()}`)
            .then(Module => Module.default())
        document.querySelector('.menus').innerHTML += `<li id="${modules.moduleName}"><div class="space" >${modules.icon}</div> ${modules.name}</li>`
    });
    document.querySelector('.menus').innerHTML += `<li class="log-out"> <div class="space" ><i class="fas fa-sign-out-alt"></i></div> Sair</li>`
    logOut()
}

export default changeModules