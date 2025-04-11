//concatenar listas/arrays
const salajs = [ 'amanda', 'pramps', 'amauri']
const salapython = ['cesar', 'pricila', 'zani']

const salasunidas = salajs.concat(salapython)
console.log(salasunidas)

//listas de listas
const alunos = [' yasmin', 'thamires', 'mariana', 'lais']
const media = [10,5,6,8,9]
const lista = [ alunos, media]

console.log(`A aluna na posição 1 é ${lista[0][0] }
    e sua média é: ${ lista[1][0]}`)