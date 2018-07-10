import './company.css'
import companyTemplate from './html/company.html'
import Vue from 'vue';
import searchCompany from './search-company';
import formNewCompany from './new-company';
const init = ()=>{
    document.querySelector('#contents').innerHTML = companyTemplate
    const app = new Vue({
        el: '#contents',
        data:{
            companies: [],
            forms: ''
        },
        methods:{
            newCompany: function(){
                return formNewCompany(app)
            },
            seachCompany: function(){
                return searchCompany(app)
            } 
        },
        mounted(){

        }
    })
}


const companies = () => {
   document.querySelector("#companies").onclick = ()=>{
       init()
       closeSidebar()
   }
}

export default companies