
function createh3(){
    var inputvalue= document.querySelector("input").value;
    // alert(inputvalue);
    var h3ref= document.createElement("h3");
    h3ref.innerText = inputvalue;

    document.querySelector("body").appendChild(h3ref);
}