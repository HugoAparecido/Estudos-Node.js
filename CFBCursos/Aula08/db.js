const conectar = async () => {
    if (global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:@localhost:3306/cfbcursos")
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}
const todosCliente = async () => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')
    return await linhas
}
const insereCliente = async (cliente) => {
    const con = await conectar()
    const sql = 'INSERT INTO cliente_node (nome,idade) VALUES (?,?)'
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql, valores)
}
const atualizaCliente = async (id, cliente) => {
    const con = await conectar()
    const sql = 'UPDATE cliente_node SET nome=?, idade=? WHERE id=?;'
    const valores = [cliente.nome, cliente.idade, id]
    await con.query(sql, valores)
}
const deletarCliente = async (id) => {
    const con = await conectar()
    const sql = 'DELETE FROM cliente_node WHERE id=?;'
    const valores = [id]
    await con.query(sql, valores)
}
module.exports = { todosCliente, insereCliente, atualizaCliente, deletarCliente }