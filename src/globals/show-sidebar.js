const showSidebar = () => {
    document.querySelector('#show-sidebar').onclick = () => {
        if ($(".sidebar").offset().left === 0) {
            document.querySelector('html').onclick = null
            return $(".sidebar").animate({ 'left': '-200px' }, 200)
        }
        $(".sidebar").animate({ 'left': '0px' }, 200)
        document.querySelector('html').onclick = ((e) => {
            if (e.pageX > $(".sidebar").width() || e.pageY > $(".sidebar").height()) {
                $(".sidebar").animate({ 'left': '-200px' }, 200)
                document.querySelector('html').onclick = null
            }
        })
    }
}
export default showSidebar