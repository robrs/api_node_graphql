const db = require('../config/database')

module.exports = {
    Query: {
        async getPessoa(_, { id }) {
            return await db('pessoas').where({ id }).first()
        },
        async getPessoas() {
            return await db('pessoas')
        }, 
    },
    Mutation: {
        async createPessoa (_, { input }) {
            const result = await db('pessoas').insert({
                name: input.name,
                email: input.email,
                idade: input.idade
            })

            const id = result[0]
            return await db('pessoas').where({ id }).first()
        }
    }
}