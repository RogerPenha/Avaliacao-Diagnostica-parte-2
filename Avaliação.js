//exercóicio 13

let valor = 4
const constante = 10

function calculo(número){
    número *= 5

return número + constante
}


if(calculo(valor) < 25){
    console.log('valor invalido')
}
else{
    console.log('valor valido')
}

console.log(calculo(valor))

for (let item = 0; item < 7; item++){
    console.log(item)
}

matriz = [[1,2,3],[4,5,6],[7,8,9]];

let numeral = matriz[1][1] + matriz[2][0]

console.log(numeral)

//exercício 14

function Multiplicação(valor1,valor2){
return valor1 * valor2
}

console.log(Multiplicação(5,5))