//object keys: verifica se a propriedade existe
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

console.log(estudante.telefones)//lista de teleones
console.log(estudante.telefones[1])
console.log(estudante['idade'])

const chaveObjeto = Object.keys(estudante)
console.log("", chaveObjeto)//retorna as propriedades como string

if(!chaveObjeto.includes("endereço")){//verifica se endereco está dentro do objeto estudante
    console.error('é necessário ter um endereço cadastrado')//mensagem de erro
}