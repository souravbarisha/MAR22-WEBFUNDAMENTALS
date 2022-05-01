const homebtn= document.querySelector("#home")
const booksbtn= document.querySelector("#books")
const kindlebtn= document.querySelector("#kindle")

const main =document.querySelector("#main")

homebtn.addEventListener("click", displayhome)
booksbtn.addEventListener("click", displaybooks)
kindlebtn.addEventListener("click", displaykindle)

function displayhome(){
    homebtn.classList.add("btn-active")
    const para= `<p>${home}</p>`
    main.innerHTML= para

    books.classList.remove("btn-active")
    kindlebtn.classList.remove("btn-active")
}
function displaybooks(){
    booksbtn.classList.add("btn-active")
    const para2=`<p>${books}</p>`
    main.innerHTML=para2

    homebtn.classList.remove("btn-activee")
    kindlebtn.classList.remove("btn-active")
}

function displaykindle(){
    kindlebtn.classList.add("btn-active")
    const para3=`<p>${kindle}</p>`
    main.innerHTML= para3

    homebtn.classList.remove("btn-active")
    books.classList.remove("btn-active")

}

const home = ` HOME
What is the switch statement?
The switch statement evaluates an expression, matching the expression’s value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.`

const books = `BOOKS
Problems with switch
The switch case is a little difficult to read and a bit ancient, and it’s prone to debugging problems.
The odd thing about the switch case is that you have to include the keyword break at the end of each case to prevent the control from moving to the next.
in addition to that, it’s a disaster when it comes to mapping complex scenarios, which can lead to difficult debugging and nested errors.
Every time we write a switch statement, we must exercise extreme caution.
The joy of writing code i`

const kindle = `KINDLE
Summing up
This isn’t to say that the switch statement isn’t useful or that using object literals is always the best option. Object literals as switches, on the other hand, should become another tool in your javascript toolbox.
You can find the f`