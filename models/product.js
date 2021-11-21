//instalamos mongoos npm install mongoose
const mongoose = require('mongoose')
//   este objeto tiene todos los metodos necesrios para un CRUD 


// Creamos el esquema (datos que queremos meter)
const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    id: {
      type: Number, 
      required: true,
      unique: true
    }, //Id externo para consultarlo 
    title: {
      type: String, 
      required: true
    },
    price:  {
      type: Number, 
      required: true
    },
    description:  {
      type: String, 
      required: true
    },
    image:  {
      type: String, 
      validate: {
        validator: function(url){
          return url.indexOf('.jpg') != -1 //que la imagen sea .jpg 
        },
        messae: "Añadir una imagen"
      }
    },
    available: Boolean
  }); 

// const productSchema = mongoose.Schema(objectSchema);

// Creo el modelo 
const Product = mongoose.model('Product', productSchema);

// Exportamos 
module.exports = Product;
