const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Linguagem favorita? ", (language) => {
  console.log("Sua linguagem favorita é %s", language)
  readline.close()
})