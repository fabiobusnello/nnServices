const closeSidebar = () => {
    document.querySelector(".close-sidebar").onclick = () => $(".sidebar").animate({ 'left': '-200px' }, 200)
    $(".sidebar").animate({ 'left': '-200px' }, 200)
}

export default closeSidebar