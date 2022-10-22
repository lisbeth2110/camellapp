const Sequelize = require('sequelize');
const usuario = require ("../models").usuario; 


module.exports=
{
Listarusuario(req, res) {
    return usuario.findAll({})
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
  },

  ListarId6(req, res) {
    return usuario.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
  
    },


  Guardarusuario(req,res){
  let nuevousuario =  usuario.create({
    correo: req.body.correo, 
    contraseña : req.body.contraseña,
    rol : req.body.rol, 
      }).then(usuario => res.status(200).send(usuario))
      .catch(error => res.status(400).send(error));

    return(nuevousuario.id);
    },
  
    Eliminarusuario(req,res) {
      return usuario.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
  
}
