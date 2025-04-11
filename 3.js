// 1. Adicione as tarefas 'Comprar pão' e 'Ler um livro' ao final da lista
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];
console.log(tarefas)
 tarefas.splice(2,2)
 tarefas.push("ler um livro")
 tarefas.push("comprar pão")
 console.log(tarefas)
 //push adiciona elementos no final da lista

 // 2. Remova a última tarefa da lista e armazene em uma variável chamada ultimaTarefa
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];
let ultimatarefa = tarefas.pop()
console.log(ultimatarefa)
console.log(tarefas)
//pop tira o ultimo item do array

// 3. Adicione 'Acordar cedo' e 'Tomar café' no início da lista
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];
tarefas.unshift('acordar cedo',' tomar café')
console.log(tarefas)
//unshift adicionar elementos no inicio da lista

// 4. Remova a primeira tarefa da lista e salve em uma variável chamada primeiraTarefa
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];
let primeiratarefa = tarefas.shift()
console.log(tarefas)
console.log(primeiratarefa)
//shift deleta primeiro item da lista

// 5. Substitua as duas primeiras tarefas por 'Fazer café da manhã' e 'Organizar a mesa'
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];
console.log(tarefas)
 tarefas.splice(0,1)
 //Frutas.splice(2,1)
 tarefas.unshift("fazer café da manhã")
 tarefas.unshift("organizar a mesa")
 console.log(tarefas)