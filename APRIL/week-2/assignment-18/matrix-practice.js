const students = [
    {name: "john 0", score:45},
    {name: "john 1", score:33},
    {name: "john 2", score:55},
    {name: "john 3", score:65},
    {name: "john 4", score:85},
  ]



function passedStudents(studentList){
    const finalArr = []
    for (let i = 0; i < studentList.length; i++) {
        if(studentList[i].score < 50){
            const obj = {
                name: studentList[i].name,
                score: studentList[i].score+15
            }
            finalArr.push(obj)
        }else{
            finalArr.push(studentList[i])
        }
    }
    console.log(finalArr)
    for (let i = 0; i < finalArr.length; i++) {
    
        
        if(finalArr[i].score > 50){
       console.log(finalArr[i].name, " has passed")
           

        }else{
            console.log(finalArr[i].name, " failed the test")
            
        }
    }
}

 passedStudents(students)
