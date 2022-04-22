
function getUsers(){

    fetch("https://randomuser.me/api/?results=20").then((res)=>{
        console.log(res.json);
       return  res.json();

    })
    .then((data) => {
        console.log(data.results);
    });


}