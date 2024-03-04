
//datos
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');


const resolvers ={
Query:{
  

},
Mutation:{ //_PrimerDato, input: leer datos, ctx contenido de datos 
  crearUsuario: async (_, {input})=>{
    const{email, password} = input;
    const existeUsuario = await Usuario.findOne({email});

    //Si el usuario existe
    if(existeUsuario){
      throw new Error('El usuario ya esta registrado');
    }
    try{
      // Hashear password
      const salt = await bcryptjs.genSalt(10); //Tamaño de los bits que va utilizar el hash
      input.password = await bcryptjs.hash(password, salt);
      console.log(input);


      //Registrar nuevo usuario
      const nuevoUsuario = new Usuario (input);
      //console.log(nuevoUsuario);

      nuevoUsuario.save();
      return "Usuario Creado Correctamente";
    }catch(error){
      console.log(error);
    }
  }
}

}

module.exports = resolvers;