//slice: dividindo uma lista em outras duas de tamanhos iguais
const nomes = ["yasmin","samuel"," ana julia",
    "nicolas","emily", "pedro","kainã", "mirela","estevão","helo"]
    
    console.log(nomes)
    
    const sala1 = nomes.slice(0, nomes.length/2)
    const sala2 = nomes.slice(nomes.length/2)
    console.log(sala1 )
    console.log(sala2)
    
    //splice(início, qtd para deletar, elemento a ser adicionado)
    const lista2 = ["yasmin", "samuel", "ana julia", "pedro"," emily", "nicolas"]
    lista2.splice(2, 2, 'rodrigo')
    console.log(lista2)
    
    //concatenar listas/arrays