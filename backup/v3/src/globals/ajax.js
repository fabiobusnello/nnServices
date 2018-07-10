import { alerts } from "../modules/alerts";
import axios from "axios"
import login from "../modules/login";
export const ajax = async (params = {}) => {
    params.withCredentials = true
    try {
        const { data } = await axios[(params.method) ? params.method.toLowerCase() : 'get'](params.url, params.body || params, params)
        return data
    } catch (e) {

        switch (e.response.status) {
            case 404: alerts({ message: '<strong>cod 404 :(</strong> <br>Pagina não encontrada! ', type: 'danger' }); login();
                break;
            case 401: alerts({ message: '<strong> :(</strong> <br>Acesso não foi autorizado!', type: 'danger' }); login();
                break;
            default: return Promise.reject(e.response || e)
        }
    }
}