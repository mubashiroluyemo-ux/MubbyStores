const navLinks = document.getElementById ("navLinks")
const menuBtn  = document.getElementById ("menuBtn") 

menuBtn.addEventListener ("click" , function() {
    navLinks.classList.toggle ("show")

    if(navLinks.classList.contains("show")){
        menuBtn.textContent = "✖️"

    }
     else{
        menuBtn.textContent = "☰"
    }
})