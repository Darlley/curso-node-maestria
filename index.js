const fs = require('fs') // File System

fs.readFile("arquivo1.txt","utf8", (err,data) => {
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})