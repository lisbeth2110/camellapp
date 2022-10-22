module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('ofertaempleo',[
    {
      nombres:"electricista",
      descripcion: "busco electricista por 6 meses",
      salario:"50000 diarios",
      horario: "7am-4pm",
      tiempo_estimado: "3 meses",
      id_empleador: 1,
    },
    {
      nombres:"ayudante construccion",
      descripcion: "se necesita ayudante de construccion",
      salario:"80000 diarios",
      horario: "6am-5pm",
      tiempo_estimado: "2 meses",
      id_empleador: 2,
    },
    {
      nombres:"oficial de obra",
      descripcion: "se requiere oficial para construccion",
      salario:"70000 diarios",
      horario: "8am-7pm",
      tiempo_estimado: "6 meses",
      id_empleador: 3,
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ofertaempleo', null, {});
  }
  
  };