let soma = 9438564635+9846544
let subtracao = 87-9
let multiplicacao = 22*4
let divisao = 10/2
console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

//operadores logicos e condições

if (soma > 10 && subtracao > 10) {
    console.log(`verdadeiro`)
}else{
    console.log(`falso`)
} 

//ex1
let idade = 16
let nome = 'yasmin'
let boleano = true

console.log(typeof idade)
console.log(typeof nome)
console.log(typeof boleano)

//ex2
let nota1 = 10
let nota2 = 4
let nota3 = 4


let média = (nota1+nota2+nota3)/3
console.log(`A sua média é ${média}`)

if (média >=7){
    console.log(`você esta aprovado`)
}
else {
    console.log(`você foi reprovado`)
    
}

//ex3
let estachovendo = true;

if (estachovendo) {
    console.log=("leve guarda chuva");
}
if (`!estachovendo`){
    console.log=("nao leve guarda chuva")
}

//ex4
let numero = 90
let multiplicação = 90*2

console.log(`o dobro de ${numero} é ${multiplicação}`)

//ex5
let idade1=16

if(idade1>=18){
    console.log("voce é maior de idade")
}
    console.log("voce é menor de idade")

//conversão de tipos
console.log('ano' +2024)
console.log('2' + '4')

//conversão explicita
console.log(parseInt('2') + parseInt('2'))//para somar ou subtrair
console.log(parseInt('2') - parseInt('2'))

//conversão implicita
console.log('10'/'2')
console.log(10+2)

let cliente = "mirela"
console.log(typeof cliente)

// variaveis
//const nome="alexandre magno"