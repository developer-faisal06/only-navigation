const navbarNav=document.querySelector('.nav-item');
    const hamberger= document.querySelector('.hamberger');
    hamberger.addEventListener("click", () => {
        hamberger.classList.toggle("active");
        navbarNav.classList.toggle("active");
    })
    document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
        hamberger.classList.remove("active");
        navbarNav.classList.remove("active");
    }))