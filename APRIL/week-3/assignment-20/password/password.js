
function clicked(){
    var inputref= document.querySelector("input");
    var btnref= document.querySelector("button");
   // inputref.type="text";
  //  btnref.innerText="Hide Password";

      if(inputref.type==="password"){
        inputref.type="text";
         btnref.innerText="Hide Password";
    }
    else {
        inputref.type="password";
         btnref.innerText="show Password";
    }
    
}