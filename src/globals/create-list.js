export const createList = (params = {}) => {

    const colums = (params.colums && typeof params.colums === 'object') ? params.colums : Object.keys(params.array[0]).map(key => key)
    params.array.forEach(obj => {
        //create line
        const tr = document.createElement('tr')
        //create columns
        colums.forEach(key => {
            const td = document.createElement('td')
            td.innerHTML = obj[key]
            tr.appendChild(td)
            if (params.delete) {
                const tdDelete = document.createElement('td')
                tdDelete.innerHTML = `<span><i class="far fa-trash-alt"></i></span>`
                tr.appendChild(tdDelete)
                tr.id = `tr${obj[params.actionParams]}`
                tdDelete.onclick = e => (params.delete) ? params.delete(obj[params.actionParams], e) : ''
            }
        })
        //create action click
            tr.onclick = e => (params.action) ? params.action(obj[params.actionParams], e) : ''
        document.querySelector(params.el).appendChild(tr)
    })
}