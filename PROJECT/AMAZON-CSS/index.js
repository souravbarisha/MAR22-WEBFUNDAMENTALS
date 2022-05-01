const homebtn=document.querySelector("#home")
const booksbtn=document.querySelector("#books")
const kindlebtn=document.querySelector("#kindle")

const homepara=document.querySelector("#home-p")
const bookspara=document.querySelector("#books-p")
const kindlepara=document.querySelector("#kindle-p")

homebtn.addEventListener("click", displayhome)

function displayhome(){
    homebtn.classList.add("btn-active")
    homepara.classList.toggle("inactive")

    bookspara.classList.add("inactive")
    kindlepara.classList.add("inactive")

    
}

booksbtn.addEventListener("click", displaybooks)

function displaybooks(){
    booksbtn.classList.add("btn-active")
    bookspara.classList.toggle("inactive")

    homepara.classList.add("inactive")
    homebtn.classList.remove("btn-active")
   
    homepara.classList.add("inactive")
    kindlepara.classList.add("inactive")
    
}

kindlebtn.addEventListener("click", displaykindle)

function displaykindle(){
    kindlebtn.classList.add("btn-active")
    kindlepara.classList.toggle("inactive")
     
    homepara.classList.add("inactive")
    homebtn.classList.remove("btn-active")

    bookspara.classList.add("inactive")
    booksbtn.classList.remove("btn-active")

    homepara.classList.add("inactive")
    bookspara.classList.add("inactive")

}
