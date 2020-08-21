const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const pessoasAttribs = `
    id: ID
    name: String!
    email: String!
    idade: Int!
`

const typeDefs = `
    type Pessoa {
        ${pessoasAttribs}
    }

    type Query {
        getPessoa(id: ID!): Pessoa
        getPessoas: [Pessoa]
    }

    input PessoaInput {
        ${pessoasAttribs}
    }

    type Mutation {
        createPessoa(input: PessoaInput): Pessoa
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})