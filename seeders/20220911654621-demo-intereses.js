module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('intereses',[
    {
      id_categoria: 1,
      id_postulante: 1,
    },
    {
      id_categoria: 2,
      id_postulante: 2,
    },
    {
      id_categoria: 3,
      id_postulante: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('intereses', null, {});
  }
  
  };