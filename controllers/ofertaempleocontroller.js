const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const ofertaempleos = require ("../models").ofertaempleo;

module.exports={
  
     consultaOfertas(req, res) {
        return ofertaempleos.findAll({})
        .then(ofertaempleos => res.status(200).send(ofertaempleos)).catch(error => res.status(400).send(error));
      },
      ListarId11(req, res) {
        return ofertaempleos.findAll({
          where: {
            id: req.params.id 
          }
        })
        .then(ofertaempleos => res.status(200).send(ofertaempleos))
        .catch(error => res.status(400).send(error));
      
        },

        Guardarofertaempleo(req, res){
          let oferta =  ofertaempleos.create({
            nombres: req.body.nombres, 
            descripcion : req.body.descripcion,
            salario: req.body.salario, 
            horario : req.body.horario, 
            tiempo_estimado : req.body.	tiempo_estimado,
            id_usuario : req.body.id_usuario,
              }).then(ofertaempleos => res.status(200).send(ofertaempleos))
              .catch(error => res.status(400).send(error));
        
            return(oferta.id);
        },
            Eliminarofertaempleo(req,res) {
              return ofertaempleos.destroy({
                where: {
                    id: req.params.id
                  }
            })
            .then(() => res.status(200).send(true))
            .catch(error => res.status(400).send(error));
        },

}