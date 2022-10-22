const Sequelize = require('sequelize');
const empleadores = require ("../models").empleador; 


module.exports=
{
  ListarEmpleador(req, res) {
    return empleadores.findAll({}).then(empleadores => res.status(200).send(empleadores)).catch(error => res.status(400).send(error));
  },

  ListarId(req, res) {
    return empleadores.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(empleadores => res.status(200).send(empleadores))
    .catch(error => res.status(400).send(error));
  
    },


  GuardarEmpleador(req, res){
  let empleado =  empleadores.create({
       tipoPersona : req.body.tipoPersona, 
       razonSocial : req.body.razonSocial,
       nombre : req.body.nombre, 
       apellido : req.body.apellido, 
       fechaNacimiento : req.body.fechaNacimiento,
       nacionalidad : req.body.nacionalidad,
       direccion : req.body.direccion, 
       telefono : req.body.telefono,
       correo : req.body.correo, 
       id_usuario : req.body.id_usuario,
      }).then(empleadores => res.status(200).send(empleadores))
      .catch(error => res.status(400).send(error));

    return(empleado.id);
    },
  
    EliminarEmpleador(req,res) {
      return empleadores.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
  
 
  
}


