module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('postulante',[
    {
      nombres: "Javier",
      apellidos: "Galindez",
      documento: "10589458695",
      foto_perfil: "foto 1",
      disponibilidad: "tiempo completo",
      nacionalidad: "colombiana",
      direccion: "calle 65",
      telefono: "3216548796",
      correo: "javigalindez@gmail.com",
      id_usuario: 1,
    },
    {
      nombres: "Javier",
      apellidos: "Galindez",
      documento: "10589458695",
      foto_perfil: "foto 1",
      disponibilidad: "tiempo completo",
      nacionalidad: "colombiana",
      direccion: "calle 65",
      telefono: "3216548796",
      correo: "javigalindez@gmail.com",
      id_usuario: 2,
    },
    {
      nombres: "yony",
      apellidos: "bolaños",
      documento: "105897458",
      foto_perfil: "foto 3",
      disponibilidad: "lunes a viernes",
      nacionalidad: "colombiana",
      direccion: "calle 35",
      telefono: "310587496",
      correo: "yonybolaños@gmail.com",
      id_usuario: 3,
    },
                                
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postulante', null, {});
  }
  
  };