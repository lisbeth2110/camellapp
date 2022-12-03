var express = require('express');
var router = express.Router();



const controladorEmpleador = require ('../controllers/empladorcontroller');
const controladorPostulante = require ('../controllers/postulantecontroller');
const controladorofertaempleo = require ('../controllers/ofertaempleocontroller');
const contoladorConsultas = require ('../controllers/consultascontroller');
const controladormultimedia = require ('../controllers/multimediacontroller');
const controladorPostulaciones = require ('../controllers/postulacionescontroller');
const controladorregistrocatalogo = require ('../controllers/registrocatalogocontroller');
const controladorusuario = require ('../controllers/usuariocontroller');
const categoriacontroller = require ('../controllers/categoriacontroller');


/*rutas tabla empleador*/
router.get('/ListarEmpleador', controladorEmpleador.ListarEmpleador);
router.get('/empleador/:id', controladorEmpleador.ListarId);
router.post('/GuardarEmpleador', controladorEmpleador.GuardarEmpleador);
router.delete('/eliminarempleador/:id', controladorEmpleador.EliminarEmpleador);

/*rutas tabla ofertasempleo*/

router.get('/consultaOfertas', controladorofertaempleo.consultaOfertas);
router.get('/ofertasdeempleo/:id', controladorofertaempleo.ListarId11);
router.post('/Guardarofertaempleo', controladorofertaempleo.Guardarofertaempleo);
router.delete('/eliminarofertaempleo/:id', controladorofertaempleo.Eliminarofertaempleo);

/*rutas tabla postulante*/

router.get('/ListarPostulante', controladorPostulante.ListarPostulante);
router.get('/postulante/:id', controladorPostulante.ListarId2);
router.post('/GuardarPostulante', controladorPostulante.GuardarPostulante);
router.delete('/eliminarpostulante/:id', controladorPostulante.EliminarPostulante);


/*rutas tabla multimedia*/

router.get('/Listarmultimedia', controladormultimedia.Listarmultimedia);
router.get('/multimedia/:id', controladormultimedia.ListarId5);
router.post('/Guardarmultimedia', controladormultimedia.Guardarmultimedia);
router.delete('/Eliminarmultimedia/:id', controladormultimedia.Eliminarmultimedia);

/*rutas tabla postulaciones*/

router.get('/Listarpostulaciones', controladorPostulaciones.Listarpostulaciones);
router.get('/postulaciones/:id', controladorPostulaciones.ListarId3);
router.post('/Guardarpostulaciones', controladorPostulaciones.Guardarpostulaciones);
router.delete('/eliminarpostulaciones/:id', controladorPostulaciones.Eliminarpostulacion);

/*rutas tabla registro catalogo*/

router.get('/Listarregistrocatalogo', controladorregistrocatalogo.registrocatalogo);
router.get('/registrocatalogo/:id', controladorregistrocatalogo.ListarId4);
router.post('/Guardarregistrocatalogo', controladorregistrocatalogo.Guardarregistrocatalogo);
router.delete('/eliminarregistrocatalogo/:id', controladorregistrocatalogo.Eliminarregistrocatalogo);

/*rutas tabla usuario*/

router.get('/Listarusuario', controladorusuario.Listarusuario);
router.get('/usuario/:id', controladorusuario.ListarId6);
router.post('/Guardarusuario', controladorusuario.Guardarusuario);
router.delete('/Eliminarusuario/:id', controladorusuario.Eliminarusuario);

/*rutas tabla categoria*/
router.get('/Listarcategorianew',categoriacontroller.Listarcategorianew);
router.post('/guardarcategoria',categoriacontroller.guardarcategoria);
router.get('/categoria/:id', categoriacontroller.ListarIdcategoria);
router.delete('/eliminarcategoria/:id',categoriacontroller.eliminarcategoria);


/*rutas de consultas*/


router.get('/consultaPostulantexCategoria', contoladorConsultas.consultaPostulantesxCategoria);
router.get('/consultaOfertaCategoria', contoladorConsultas.consultaOfertaxCategoria);
router.get('/consultaPostulantesxOfertaempleo', contoladorConsultas.consultaPostulantesxOfertaempleo);
router.get('/consultaCatalogoXpostulante', contoladorConsultas.consultaPostulantesxOfertaempleo);
router.get('/consultamultimediaXcatalogo', contoladorConsultas.consultamultimediaXcatalogo);
router.get('/consultaempleadorXusuario', contoladorConsultas.consultaempleadorXusuario);
router.get('/consultapostulanteXusuario', contoladorConsultas.consultapostulanteXusuario);
router.get('/consultaofertaXempleador', contoladorConsultas.consultaofertaXempleador);

router.post('/singin',autenticacioncontroller.signIn)
router.post('/singup',autenticacioncontroller.signIn)

module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  