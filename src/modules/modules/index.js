import './modules.css'
import showModules from './show-modules';

const modules = async () => {
    document.querySelector('#modules').onclick = ()=>{
        showModules().catch(console.log)
        closeSidebar()
    }
}

export default modules