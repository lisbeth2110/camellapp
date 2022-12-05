const{usuario} =require('../models/index');
const bcrypt = require('bcrypt');
const jwk = require('jsonwebtoken');
const authconfig = require('../config/auth');


module.exports = {
    signIn( req, res){
        let { correo, contraseña, rol} = req.body;
        
        //buscar usuario
        Usuario.findOne({
            where:{
                correo:correo,
                rol:rol
            }
        }).then(usuario => {
            if (!usuario) { 
                res.status(404).json({ msg: "Este usuario no existe" });
            } else {
                if (bcrypt.compareSync(contraseña, usuario.contraseña)) {

                    let token = jwt.sing({ usuario: usuario}, authconfig.secret, {
                        expiresIn: authconfig.expires  
                    });

                    res.json({
                        usuario:usuario,
                        rol:rol,
                        token: token
                    }) 

                } else {
                    res.status(400).json({ msg: "contraseña incorrecta"})
                }
            }
        }).catch(error => {
            res.status(500).json(error);
        })
    },
    //registar
    signUp(req, res){

        //incriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, authconfig.rounds);

        usuario.create({
            rol: req.body.rol,
            correo: req.body.correo,
            password: password,
            
        }).then(usuario => {
            // creamos la contraseña
            
            let token = jwt.sing({ usuario: usuario }, authconfig.secret, {
             expiresIn: authconfig.expires   
            });

             res.json({
                usuario:usuario,
                token: token
             });
        }).catch(error => {
            res.status(500).json(error);
        });
    }
}