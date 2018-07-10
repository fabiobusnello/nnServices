const deleteUser = (userId, moduleId, e) => {
    alerts({
        message: `Remover o acesso deste Modulo para este usuário?<br>
        <span><input type="button" id="remove-user-sim" class="btn btn-danger" value="Sim"></span>
        <span><input type="button" onclick="$('.close-alert').click()" class="btn btn-secondary" value="Não"></span>
    `, type: 'primary'
    })
    document.querySelector('#remove-user-sim').onclick = e => {
        ajax({ url: `modules/${moduleId}/${userId}`, method: 'delete' })
            .then(data => {
                $(`#tr${userId}`).remove()
                $('.close-alert').click()
            })
            .catch(console.log)
    }
}

export default deleteUser