


const names= ['virat','dhoni','sachin','hardik','rishob','jadeja','rohit','rayna']
const classes= ['one','two','three','four','five','six','seven','eight']

for ( let i=0;i<names.length; i++){
    const newelement = document.createElement('p')
    newelement.innerText= names[i]
    newelement.classList.add(classes[i])
    const target = document.querySelector('h1')
    target.appendChild(newelement)


}