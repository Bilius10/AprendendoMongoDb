//atualizar registro
db.Produtos.update({
    marca : 'Neve'
},{
    $set: {
        nome : 'Doritos'
    }
})
   
//atualizar so um 
db.Produtos.updateOne({
    marca : 'Neve'
},{
    $set: {
        nome : 'Doritos'
    }
})

//atualizar todos
db.Produtos.updateMany({
    marca : 'Neve'
},{
    $set: {
        nome : 'Doritos'
    }
})

//atualizar e retornar qual atualizou
db.Produtos.findOneAndUpdate({
    marca : 'Neve'
},{
    $set: {
        nome : 'Doritos'
    }
})