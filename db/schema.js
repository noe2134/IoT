const { gql } = require('apollo-server');

const typeDefs =gql`

    type Curso{
        titulo: String
        tecnologia: String
    }
    type Tecnologia{
        tecnologia: String
    }
    type Materias{
        titulo: String
        dias: String
    }
    type Query{
        obtenerRecursos: [Curso]
        obtenerTecnologia: [Tecnologia]
        obntenerMaterias: [Materias]
    }
    input UsuarioInput{
        nombre: String!
        email: String!
        password: String!


    }
    type Mutation{
        crearUsuario(input: UsuarioInput): String 
    }

    `;

    module.exports = typeDefs;