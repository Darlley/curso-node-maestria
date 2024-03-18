const fs = require('fs')

const file_name1 = "arquivo.txt" 
const file_name2 = "new.txt"

fs.rename(file_name1, file_name2, (err) => {
  if(err){
    console.log(err)
    return 
  }

  console.log("Arquivo " + file_name1 + " renomeado para " + file_name2 + "!")
})