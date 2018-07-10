import companyForm from './html/company-form.html'
const newCompany = (app)=>{
    app.forms = companyForm
    $(document).ready(function(){$("#modal-company").modal('show')})
}

export default newCompany