import companySearch from './html/company-search.html'

function searchCompany(app){
    app.forms = companySearch
    $(document).ready(function(){$("#modal-company-searsh").modal('show')})
}

export default searchCompany