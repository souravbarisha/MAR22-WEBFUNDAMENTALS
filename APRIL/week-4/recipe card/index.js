
const input = document.querySelector("#search-input")
const container = document.querySelector(".container")
const form = document.querySelector("form")
const icon = document.querySelector("#icon")


form.addEventListener("submit",searchrecipe)
 icon.addEventListener("click",searchrecipe)

function searchrecipe(eve){
   eve.preventDefault()
   console.log("submited...")

   const searching= input.value
   console.log (searching)

   fetchdata(searching)
}


let query= "pancake"

    const baseURL = `https://api.edamam.com/search?q=${query}&app_id=a6d62631&app_key=db65596bbd8f8d675d159c99933c8890&from=0&to=20`;
    
    function fetchdata(){ 
        console.log("fetching.......")
    fetch(baseURL).then((anythings)=>{
        return anythings.json()
    })
        .then((virat)=>{
            console.log(virat.hits)
            displaydata(virat.hits)
        })
        .catch((error)=>{
            console.log("got some error", error)
        })
    
    }

    function displaydata(recipelist){
      container.innerHTML=''
      for (let i=0; i<recipelist.length;i++){
          const element = recipelist[i];
          console.log(element.recipe)
          const html=`
          <div class="recipe-card">
          <img src="https://c.ndtvimg.com/2021-07/vckh316o_grilled-chicken-sandwich_625x300_28_July_21.jpg" alt="" class="img"/>
          <div class="flex-items">
              <p>${element.recipe.source}</p>
              <a href="${element.recipe.url}">View Recipe</a>
          </div>
          <div class="more-details">
              <p>${element.recipe.label}</p>
          </div>
      </div>

          `
          container.innerHTML=container.innerHTML + html
      }
    }
    


