(async () => {
    const db = require('./db')
    // console.log('novo cliente inserido')
    // const nom = "Brastorgilsan"
    // const ida = 20
    // await db.insereCliente({ nome: nom, idade: ida })

    // const id = 2
    // const nom = "Lesvirson"
    // const ida = 38
    // await db.atualizaCliente(id, { nome: nom, idade: ida })
    // console.log('cliente ' + id + ' atualizado')

    const id = 2
    await db.deletarCliente(id)
    console.log('cliente ' + id + ' deletado')
    console.log('Obter todos os clientes')
    const clientes = await db.todosCliente()
    console.log(clientes)
})()