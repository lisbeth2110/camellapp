const Sequelize = require('sequelize');
const registrocatalogo = require ("../models").registrocatalogo; 


module.exports=
{
  registrocatalogo(req, res) {
    return registrocatalogo.findAll({}).then(registrocatalogo => res.status(200).send(registrocatalogo)).catch(error => res.status(400).send(error));
  },

  ListarId4(req, res) {
    return registrocatalogo.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(registrocatalogo => res.status(200).send(registrocatalogo))
    .catch(error => res.status(400).send(error));
  
    },


  Guardarregistrocatalogo(req,res){
  let registrarcatalogo =  registrocatalogo.create({
    titulo : req.body.titulo, 
    descripcion : req.body.descripcion,
    lugartrabajo : req.body.lugartrabajo, 
    fechaInicioTrabajo: req.body.fechaInicioTrabajo, 
    tiempoTrabajo: req.body. tiempoTrabajo,
    id_postulante : req.body.id_postulante,
      }).then(registrocatalogo => res.status(200).send(registrocatalogo))
      .catch(error => res.status(400).send(error));

    return(registrarcatalogo.id);
    },
  
    Eliminarregistrocatalogo(req,res) {
      return registrocatalogo.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
  
}

