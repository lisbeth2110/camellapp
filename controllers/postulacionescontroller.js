const Sequelize = require('sequelize');
const postulaciones = require ("../models").postulaciones; 

module.exports=
{
  Listarpostulaciones(req, res) {
    return postulaciones.findAll({}).then(postulaciones => res.status(200).send(postulaciones)).catch(error => res.status(400).send(error));
  },


ListarId3(req, res) {
    return postulaciones.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(postulaciones => res.status(200).send(postulaciones))
    .catch(error => res.status(400).send(error));
    },


  Guardarpostulaciones(req, res){
  let postulacion =  postulaciones.create({
       salarioPactado : req.body.salarioPactado, 
       fecha_postulaciones: req.body.fecha_postulaciones,
       estado : req.body.estado,
       id_postulante : req.body.id_postulante,
       id_ofertaempleo : req.body.id_ofertaempleo, 
      }).then(postulaciones => res.status(200).send(postulaciones))
      .catch(error => res.status(400).send(error));

    return(postulacion.id);
    },
  
    Eliminarpostulacion(req,res) {
      return postulaciones.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
  
 
  
}
