//objetos

const estudante= {
    nome:"yasmin",
    idade:15,
    prontuário:3044173,
   turma: "desenvolvimento web",
    bolsista: true,
    telefones: ["1197287-3212", "11941035161"],
    endereco:[{
        rua: "luis brito de almeida",
        numero:2019,
        bairro:"santa efigenia"
    },
    {
        rua: "luis brito de almeida",
        numero:2019,
       bairro:"santa efigenia" 
    }]
}
console.log(typeof estudante)//objeto
console.log(estudante)

//acessando propriedades do objeto
console.log(estudante.telefones)//lista de teleones
console.log(estudante.telefones[1])
console.log(estudante['idade'])

estudante.edereco = {
    rua:"felipe camarão",
    numero:1588,
    bairro:"santa cruz"
}

console.log(estudante.edereco.rua)
