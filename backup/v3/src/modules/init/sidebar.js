import sidebarHtml from './sidebar.html'
import changeModules from "./change-modules";

const sidebar = (params = []) => {
    document.querySelector('#sidebar').innerHTML = sidebarHtml
    showSidebar()
    changeModules()
    closeSidebar()
    //remover
    document.querySelector('#show-sidebar').click()
}

export default sidebar