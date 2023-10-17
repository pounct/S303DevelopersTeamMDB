
use('floristeriamdb');

crear floristeria
db.floristeria.insertOne({id : 1,nom:"floristeria1"})

afegir arbre
db.arbre.insertOne({id: 1, alcada: 23.5, preu: 12.3, floristeriaId:1})
db.producte.insertOne({id: 1, enStock:1})

afegir flor
db.flor.insertOne({id : 2,color:"rojo", preu: 1.3, floristeriaId:1})
db.producte.insertOne({id: 2, enStock:1})

afegir decoracio
db.decoracio.insertOne({id : 3, material:"fusta", preu: 51.3, floristeriaId:1})
db.producte.insertOne({id: 3, enStock:1})
db.decoracio.insertOne({id : 4, material:"plàstic", preu: 51.3, floristeriaId:1})
db.producte.insertOne({id: 4, enStock:1})

