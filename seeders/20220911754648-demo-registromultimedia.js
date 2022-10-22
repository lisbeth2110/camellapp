module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('registromultimedia',[
    {
      descripcion: "evidencias de trabajos en construccion en la ciuda",
      titulo: "foto construccion",
      url: "url",
      id_registrocatalogo: 1,
    },
    {
      descripcion: "evidencia de apartamento finalizado en obra blanca'",
      titulo: "foto obra blanca",
      url: "url",
      id_registrocatalogo: 2,
    },
    {
      descripcion: "evidencia de casa finalizada en obra gris",
      titulo: "foto obra gris",
      url: "url",
      id_registrocatalogo: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registromultimedia', null, {});
  }
  
  };