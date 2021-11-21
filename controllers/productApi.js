const dataProduct = require('../utils/product')// Lanzar la BBDD Mongo 
const data = require('../models/product') // Leer los datos del array
//console.log(data); // lee el array de datos

const Product = require('../models/product')
// obtengo el modelo del producto 

const getProduct = async (req,res) => {
    console.log("*******************");
    console.log(req.params);
    let data; // Consulta los datos del producto correspondiente
    try{
        if(req.params.id){
            data = await Product.find({'id': req.params.id}, '-_id -__v') // con un - borramos un valor
            console.log(data)
            res.status(200).json(data[0]) // Creo un array con 1 dato. Con [0] devolvemos un objeto solo y no un array con un objeto 
        } else{
            data = await Product.find({},'-_id -__v');
            res.status(200).json({products:data}) // Envio un array con N datos
        } }
        catch(err) {
            res.status(400).json({"error":err})
    }  
}


const createProduct = async (req,res) => {
    console.log("***************");
    // Se guardaran cosas en la BBDD
    console.log(req.body); // En req.body está el objeto a guardar
    // Guardar en la BBDD MongoDB
    try{
        const product = new Product(req.body); // Genero el nuevo documento
        const result = await product.save(); // Lo guarda en BBDD
        console.log("Producto creado!!!!!**************");
        console.log(result);
        res.status(201).json(result);
    } catch(err){
        res.status(400).json({"error":err})
    }  
}

const product = {
    getProduct,
    createProduct
}
module.exports = product