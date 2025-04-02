//procurar um registro
db.Produtos.find({ "quantidade": 3})

db.Produtos.find({ "nome": "Doritos",
                    "quantidade": 2})

//operador de comparação não logico
//maior que
db.Produtos.find({ 
   valor: {
       $gt: 12.99
   }})

//maior ou igual
db.Produtos.find({ 
   valor: {
       $gte: 12.99
   }})

//menor que
db.Produtos.find({ 
   valor: {
       $lt: 12.99
   }})

//menor ou igual
db.Produtos.find({ 
   valor: {
       $lte: 12.29
   }})

//por data
db.Produtos.find({
    dataEntrada: {
        $lt: ISODate('2024-05-20')
    }
})

//não possui esse valor
db.Produtos.find({
    quantidade: {
        $ne: 2
    }
})


//todos que possue esses valores
db.Produtos.find({
    quantidade: {
        $in: [2,3]
    }
})

//traga todos que não estão nessa lista
db.Produtos.find({
    quantidade: {
        $nin: [2,3]
    }
})
 
//operadores logicos
//operador e
db.Produtos.find({
    $and: [{
        quantidade : {
            $gt: 2
        },
        quantidade : {
            $lt: 6
        },
        nome : {
            $eq: "Ruffles"
        }
    } 
    ]
})

//operador or
db.Produtos.find({
    $or: [
        {
            nome: 'Doitos'
        },
        {
            nome: 'Rufles'
         },
         {
             valor : {
                 $gt : 5
             }
         }
    ]
})

//operador not
db.Produtos.find({
    quantidade : {
        $not :  {
            $eq : 5
        }
    },
    valor : {
        $gt : 4.99
    }
})

//operador nor
db.Produtos.find({
    $nor : [
    {
        nome : "Mellitta"
    },
    {
        valor: {
            $gt : 5
        }
    }
    ]
})

//traga os valores nulos de um lugar
db.Usuarios.find({
    endereco: {
        $exists: false
    }
})

//traga todos que possuem tal tipo de dado
db.Produtos.find({
    marca: {
        $type: 2
    }
})

//quais produtos não quero que apareça
db.Produtos.find(
{}, 
{
  nome: 0,
  valor: 0 
})

//quais produtos eu quero que apareça
db.Produtos.find(
{}, 
{
  nome: 1,
  valor: 1
})

//quantas inserções
db.Produtos.find().count()

//quantas inserções filtradas
db.Produtos.find(
{
    marca : "Elma Chips"
}
).count()


//ordenar 
db.Produtos.find().sort({nome:-1 ou 1})

//limitar quantos vai te retornar
db.Produtos.find().limit(2)