module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('postulaciones',[
    {
      salarioPactado: "80000",
      fecha_postulaciones: "25/09/2022",
      estado: "inscrito",
      id_postulante: 1,
      id_ofertaempleo: 1,
    },
    {
      salarioPactado: "120000",
      fecha_postulaciones: "11/08/2022",
      estado: "revision",
      id_postulante: 2,
      id_ofertaempleo: 2,
    },
    {
      salarioPactado: "110000",
      fecha_postulaciones: "24/11/2022",
      estado: "seleccionado",
      id_postulante: 3,
      id_ofertaempleo: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postulaciones', null, {});
  }
  }; 