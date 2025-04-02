//inserir uma informação
db.Usuarios.insertOne({
    "Nome": "João",
    "Cpf": "12345678912",
    "telefone": "23 884773022"
})

//Inserir mais de um
db.Produtos.insertMany([
{
    "codigoBarras": "12345678910",
    "nome": "Doritos",
    "marca": "Elma Chips",
    "valor": 9.99,
    "quantidade": 2
},
{
    "codigoBarras": "12334678910",
    "nome": "Papel Higienico",
    "marca": "Neve",
    "valor": 12.29,
    "quantidade": 10
}
])