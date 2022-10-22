module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('usuario',[
      {
      correo: "Jhon@gmail.com",
      contrasena: "123456789",
      rol: "empleador",
      },
      {
        correo: "leyder@gmail.com",
        contrasena: "5468795",
        rol: "empleador",
        },
      {
        correo: "sebas@gmail.com",
        contrasena: "021597425",
        rol: "postulante",
       },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ususario', null, {});
  }
  
  };