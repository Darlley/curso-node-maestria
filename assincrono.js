const fs = require('fs')

console.log("Inicio #01")
fs.writeFile('async.txt',"Durante", function(err){
  setTimeout(()=>{
    console.log('Durante #03')
  },1000)
})

console.log("Fim #02")