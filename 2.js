//função sem retorno
function mensagem () {
    console.log('olá mundo')
}
mensagem()

//função com retorno
function soma (a,b) {
  return a + b
}
let resultado = soma(5,6)
console.log(resultado)

//fução sem parametro
function mensagem () {
    let nome = 'yasmin'
    let idade = '16'
    console.log(`ola, ${nome}, sua idade é ${idade}`)
}
//fução sem parametro
function mostrarHoraLocal () {
    let hora = new Date()
    console.log(`hora atual: ${hora.toLocaleTimeString()}`)
}

mostrarHoraLocal ()

//fução sem parametro
function cumprimentar(nome, idade){
console.log(`ola, ${nome}, sua idade é ${idade}`)
}
cumprimentar('ana',20)
cumprimentar('pedro',25)
cumprimentar('lorena',29)
//função declarativa
mensagem ()

function mensagem () {
    console.log('olá mundo')
}
//função de expressão
const mensagem1 = function{
  console.log('olá mundo')
}
mensagem1()

//função de seta
const saudacao = () => 'olá yas'
saudacao()

//função de seta com parametro
  const saudacao1 = (nome) => `ola, ${nome}`
 saudacao1('yas')

//função declarativa
let nome = 'yas'
const altura = 1.40


function mensagem () {
  let nome1 ='lais'
  var idade1 = 18
  console.log(nome)
  console.log(idade)
  console.log(idade1)
  console.log(nome1)
  
  mensagem ()
}

