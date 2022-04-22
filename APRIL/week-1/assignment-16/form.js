const myname = document.getElementById('firstname')
const mylastname= document.getElementById('lastname')
const myemail = document.getElementById('email')
const myph = document.getElementById('ph')
const mypassword = document.getElementById('password')
const myrepassword = document.getElementById('repassword')
const mybtn= document.getElementById('sub-btn')

const myform = document.querySelector('form')
////////////
myform.addEventListener('submit', submition)

// mybtn.addEventListener('click', buttonclick)

// function buttonclick(){
//     console.log ("button is clicked")
// }

function submition(e){
    e.preventDefault()
    console.log ("form is submitted")


if (myname.value ===""){
console.log ('name is empty')
myname.classList= "error"
// namesmall.classList= 'display'
}
else{
    myname.classList="success"
}

if (mylastname.value=== ""){
console.log ('last name is empty')
mylastname.classList= "error"}
else{
    mylastname.classList="success"
}

if (myemail.value ===""){
console.log ('email is empty')
myemail.classList= "error"}
else{
    myemail.classList="success"
}
if (myph.value ===""){
console.log ('email is empty')
myph.classList= "error"}
else{
    myemail.classList="success"
}

if (mypassword.value ===""){
console.log ('password is empty')
mypassword.classList= "error"}
else{
    mypassword.classList="success"
}

if (myrepassword.value ===""){
console.log ('confirm password is empty')
myrepassword.classList= "error"}
else{
    myrepassword.classList="success"
}
}