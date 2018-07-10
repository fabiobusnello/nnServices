import './init.css'
import sidebar from './sidebar';
import template from './index.html'
export const init = (param = {}) => {
    document.querySelector("#main").innerHTML = template
    $('.navbar').animate({ "margin-top": '+=100px' }, 500, ()=>{
        document.querySelector('.contents').style.display = 'block'
    })
    sidebar()
}
