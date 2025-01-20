(async () => {
    const db = require('./db')
    console.log('Selecionar todos os clientes')
    const clientes = await db.todosCliente()
    console.log(clientes)
})()