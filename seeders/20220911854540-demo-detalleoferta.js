module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('detalleoferta',[
    {
      id_ofertaEmpleo: 1,
      id_categoria: 1,
    },
    {
      id_ofertaEmpleo: 2,
      id_categoria: 2,
    },
    {
      id_ofertaEmpleo: 3,
      id_categoria: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('detalleoferta', null, {});
  }
  };