module.exports = {
up: (queryInterface, Sequelize) =>{
  return queryInterface.bulkInsert('empleador',[
  {
    tipoPersona : "natural", 
    razonSocial : "empresa",
    nombre : "Jhon", 
    apellido : "Capote", 
    fechaNacimiento : "29/09/1995",
    nacionalidad : "colombiana",
    direccion : "calle 66", 
    telefono : "3125897846",
    correo : "jhoncapte@gmail.com", 
    id_usuario: 1,
  },
  {
    tipoPersona : "natural", 
    razonSocial : "informal",
    nombre : "Leyder", 
    apellido : "sanchez", 
    fechaNacimiento : "11/10/1996",
    nacionalidad : "colombiana",
    direccion : "calle 63", 
    telefono : "3156987452",
    correo : "leyder@gmail.com", 
    id_usuario: 2,
  },
  {
    tipoPersona : "natural", 
    razonSocial : "informal",
    nombre : "sebatian", 
    apellido : "Gomez", 
    fechaNacimiento : "13/08/1998",
    nacionalidad : "colombiana",
    direccion : "calle 62", 
    telefono : "31026547896",
    correo : "sebas@gmail.com", 
    id_usuario: 3,
  },
  
  
  ]);
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('empleador', null, {});
}

};