const students = [
    {name: "ram", score:45},
    {name: "sham", score:33},
    {name: "jadu", score:55},
    {name: "madhu", score:65},
    {name: "gita", score:70},
    {name: "nita", score:50},
    {name: "rita", score:30},
    {name: "raja", score:40},
    {name: "rani", score:35},
    {name: "badsha",score:85},
  ]
  
  function passedstudent (studentlist){
const finalArr =[]
   
for (let i=0; i<studentlist.length; i++){
    if(studentlist[i].score < 50){
        const obj= {
            name : studentlist[i].name,
            score: studentlist[i].score + 10
        }
        finalArr.push(obj)
    }
       else{
           finalArr.push(studentlist)
       }
}
  
    console.log(finalArr)

  
  for(let i=0; i<finalArr.length; i++){
      if(finalArr[i].score>=50){
          console.log(finalArr[i].name, "has passed")
      }else{
          console.log(finalArr[i].name,"failed the test")
      }
  }
  }

  passedstudent(students)

  