module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('categoria',[
    {
      nombre : "obra blanca", 
      descripcion: "terminaciones de una casa" 
    },
    {
      nombre : "obra negra", 
      descripcion: "'excelente acabado de repello" 
    },
    {
      nombre : "electicidad", 
      descripcion: "cableado estructurado" 
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categoria', null, {});
  }
  
  };