const x = '10'

// if((typeof x) === "string"){
if(!Number.isInteger(x)){
  throw new Error("O valor de x é invalido!")
}
console.log("Continando...")