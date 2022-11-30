const Sequelize = require('sequelize');
const categorias= require ("../models").categoria;
; 

module.exports=
{  
  
    Listarcategorianew(req, res) {
      return categorias.findAll({})
      .then(categorias => res.status(200).send(categorias))
    .catch(error => res.status(400).send(error));
  
    },

   ListarIdcategoria(req, res) {
   return categorias.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(categorias => res.status(200).send(categorias))
    .catch(error => res.status(400).send(error));
    },

    
   guardarcategoria(req, res){
        let categoria = categorias  .create({
                nombre : req.body.nombre,
                descripcion: req.body.descripcion,
             
        }).then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));

            return(categorias.id); 
            
    },
     
    eliminarcategoria(req,res) {
      return categorias.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}