//remover um registro
db.Produtos.deleteOne({
    _id: ObjectId("67ed06c1d9796d1bea44152f")
})

//deletar mais de um
db.Produtos.deleteMany({
    nome: "Doritos"
})