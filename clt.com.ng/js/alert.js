let overlay = document.getElementById("alert-section");
let messageTitle = "WAEC GCE REGISTRATION"
let message = "Contact Us for the 2024-2  REGISTRATION"



function showAlert(){
    overlay.style.display = "block";
    document.getElementById("alert-title").innerHTML = messageTitle,
    document.getElementById("message").textContent =message;

    let dateElement = document.createElement("p");
    dateElement.setAttribute("id", "currentDate");
    dateElement.innerHTML = Date();

    var alertCloseBtn = document.createElement("button");
    alertCloseBtn.setAttribute("id", "alertCloseBtn");
    alertCloseBtn.className = "addBtn"
    alertCloseBtn.innerHTML = "Close"

    overlay.appendChild(dateElement);
    overlay.appendChild(alertCloseBtn)

    document.getElementById("alertCloseBtn").onclick = ()=>{
        overlay.style.display = "none"
    }

    //JS STYLING
    overlay.style.position = "fixed"
    overlay.style.alignItems = "center"
    overlay.style.backgroundColor = "rgba(64, 219, 243, 0.99)";
    overlay.style.textAlign = "center";
    overlay.style.border = "1px solid red";
    
    let btn = document.querySelector(".addBtn");
    btn.style.border = "10px dashed ";
    btn.style.cursor = "progress"
   
}






function advertAlert(){
    advElement = document.getElementById("advert1");

    let h2 = document.createElement("h3");
    h2.setAttribute("id", "advTitle")
    h2.innerHTML = "Your Bussiness surely need a website...";
    
    let para = document.createElement("p");
    para.setAttribute("id", "advMessage");
    para.textContent = "Click the button below to have it done! ";

    let addBtn = document.createElement("button");
    addBtn.className = "addBtn"
   


    let a = document.createElement('a');
    a.setAttribute("href", "https://google.com/");
    a.setAttribute("target", "_blank");
    a.innerHTML = "Call";

    let closeBtn = document.createElement("button");
    //closeBtn.classList.add("addBtn")
    closeBtn.className = "addBtn"
    closeBtn.setAttribute("id", "AdvCloseBtn");
    closeBtn.innerHTML = "Close"
    
    addBtn.appendChild(a)
    advElement.appendChild(h2);
    advElement.appendChild(para);
    advElement.appendChild(addBtn);
    advElement.appendChild(closeBtn);

    window.removeEventListener('scroll', checkScroll);

    document.getElementById("AdvCloseBtn").onclick = ()=>{
        advElement.style.display = "none";
    }


     //JS STYLING

     advElement.style.position = "fixed"
     advElement.style.alignItems = "center"
     advElement.style.backgroundColor = "rgba(64, 219, 243, 0.99)";
     advElement.style.textAlign = "center";
     advElement.style.border = "1px solid red";
     advElement.style.top = "55%";
     a.style.textDecoration = "none";
     
     let btn2 = document.querySelectorAll(".addBtn");
     btn2.forEach(btn=>{
        btn.style.border = "10px solide";
        btn.style.cursor = "progress";
        btn.style.padding = "10px 15px";
        btn.style.margin = "5px";
     })
    

}






function checkScroll(){
    if(window.scrollY >= 600){
        advertAlert();
    }
}



window.onload = ()=> {
    setTimeout(showAlert, 2000);
    //document.getElementsByTagName("body")[0].onclick = closeAlert;
    window.addEventListener('scroll', checkScroll);
}

