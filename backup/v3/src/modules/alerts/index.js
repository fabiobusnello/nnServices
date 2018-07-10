import './index.css'
let timeout
export const alerts = (params = {}) => {

    const html = `<div id="alerts" class="alert alert-${params.type || 'warning'} alert-dismissible fade show" role="alert">
   <button type="button" class="close close-alert">
      <span aria-hidden="true">&times;</span>
    </button><br>${params.message}
  </div>`

    clearTimeout(timeout)
 
    $("#alerts").remove()
    $('body').append(html)
    $("#alerts").animate({ right: '+=303px' }, 200)
    $(".close-alert").click(() => {
      $("#alerts").animate({ right: '-=303px' }, 200, () => $("#alerts").remove())
    })
    timeout = setTimeout(() => $(".close-alert").click(), 3000)
    $("#alerts").mousemove(() => {
      clearTimeout(timeout)
    })
    $("#alerts").mouseout(() => {
      timeout = setTimeout(() => $(".close-alert ").click(), 3000)
    })
  }