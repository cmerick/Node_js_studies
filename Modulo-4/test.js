const { deepEqual } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRADO = {
    id: 1,
    nome: "Flash",
    poder: "Speed",
}

const DEFAULT_ITEM_ATUALIZAR = {
    id: 2,
    nome: 'Lanterna Verde',
    poder: 'Anel da coragem'
}



describe('Suite de manipulação de Heróis', () => {
    /* before(async () => {
        await database.cadastrarHeroi(DEFAULT_ITEM_CADASTRADO)
        await database.cadastrarHeroi(DEFAULT_ITEM_ATUALIZAR)
    }) */

    /* it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)

        deepEqual(resultado, expected)
    }) */

    /* it('deve cadastar heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const resultado = await database.cadastrarHeroi(DEFAULT_ITEM_CADASTRADO)
        const [actual] = await database.listar(expected.id)

        deepEqual(actual, expected)
    })
    it('deve remover um heroi por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRADO.id)
        deepEqual(resultado, expected)
    }) */
    it('deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        deepEqual(resultado, expected)
    })

})

