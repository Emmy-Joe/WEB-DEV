

    export function showSideBar() {
        // Your logic to show the sidebar
        document.querySelector(".sidebar").style.display = "block"
    }

    export function hideSideBar(){
        document.querySelector(".sidebar").style.display = 'none'

    }

    window.addEventListener('click', (event)=>{
        const sidebar = document.querySelector('.sidebar');
        if(sidebar.style.display === 'block' && !event.target.closest('.showOnMobile')){
            hideSideBar()
        }
    })


 