window.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && !event.target.closest('.showOnMobile')){
        hideSideBar();
    }
});


 function showSideBar(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "block"
}

hideSideBar = ()=>{
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none"
}




