const Sequelize = require('sequelize');
const multimedia = require ("../models").registromultimedia; 


module.exports=
{
  Listarmultimedia(req, res) {
    return multimedia.findAll({})
    .then(multimedia => res.status(200).send(multimedia))
    .catch(error => res.status(400).send(error));
  },

  ListarId5(req, res) {
    return multimedia.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(multimedia => res.status(200).send(multimedia))
    .catch(error => res.status(400).send(error));
  
    },


  Guardarmultimedia(req,res){
  let registromultimedia =  multimedia.create({
    descripcion: req.body. descripcion, 
    titulo : req.body.titulo,
    url : req.body.url, 
    id_registrocatalogo: req.body.id_registrocatalogo, 
      }).then(multimedia => res.status(200).send(multimedia))
      .catch(error => res.status(400).send(error));

    return(registromultimedia.id);
    },
  
    Eliminarmultimedia(req,res) {
      return multimedia.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
  
}