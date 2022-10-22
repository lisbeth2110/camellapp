const Sequelize = require('sequelize');

const postulantes = require ("../models").postulante;


module.exports=
{
    ListarPostulante(req, res) {
        return postulantes.findAll({}).then(postulantes => res.status(200).send(postulantes)).catch(error => res.status(400).send(error));
      },

    
     ListarId2(req, res) {
       return postulantes.findAll({
            where: {
                id: req.params.id 
              }
        })
    .then(postulantes => res.status(200).send(postulantes))
    .catch(error => res.status(400).send(error));
    },
        
    

  GuardarPostulante(req, res){
    let postulante = postulantes.create({
         nombres : req.body.nombres, 
         apellidos : req.body.apellidos,
         documento : req.body.documento, 
         foto_perfil : req.body.foto_perfil, 
         disponibilidad : req.body.disponibilidad,
         nacionalidad : req.body.nacionalidad,
         direccion : req.body.direccion, 
         telefono : req.body.telefono,
         correo : req.body.correo, 
         id_usuario : req.body.id_usuario,
        }).then(postulantes => res.status(200).send(postulantes))
        .catch(error => res.status(400).send(error));
  
      return(postulante.id);
      },


      EliminarPostulante(req,res) {
        return postulantes.destroy({
          where: {
              id: req.params.id 
            }
      })
      .then(() => res.status(200).send(true))
      .catch(error => res.status(400).send(error));
  },




    
  }
  