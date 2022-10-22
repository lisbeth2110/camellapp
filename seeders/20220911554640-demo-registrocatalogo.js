module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('registrocatalogo',[
    {
      titulo: "cableado estructurado",
      descripcion:"evidencia de electricidad",
      lugartrabajo: "popayan",
      fechaInicioTrabajo: "12/07/2022",
      tiempoTrabajo: "2 meses",
      id_postulante: 1,
    },
    {
      titulo: "estucado",
      descripcion:"evidencia de trabajo en obra blanca",
      lugartrabajo: "timbio",
      fechaInicioTrabajo: "24/11/2022",
      tiempoTrabajo: "3 meses",
      id_postulante: 2,
    },
    {
      titulo: "repellado",
      descripcion:"evidencia de trbajo en obra gris",
      lugartrabajo: "cairo",
      fechaInicioTrabajo: "4/12/2022",
      tiempoTrabajo: "4 meses",
      id_postulante: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registrocatalogo', null, {});
  }
  
  };