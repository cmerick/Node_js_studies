const assert = require('assert');

const { getPerson } = require('./service');

//instalamos o pacote nock para simularmos requisições

const nock = require('nock')

describe('Star Wars Tests', function () {
    this.beforeAll(() => {
        const response = {
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'R2-D2',
                    height: '96',
                    mass: '32',
                    hair_color: 'n/a',
                    skin_color: 'white, blue',
                    eye_color: 'red',
                    birth_year: '33BBY',
                    gender: 'n/a',
                    homeworld: 'https://swapi.py4e.com/api/planets/8/',

                    vehicles: [],
                    starships: [],
                    created: '2014-12-10T15:11:50.376000Z',
                    edited: '2014-12-20T21:17:50.311000Z',
                    url: 'https://swapi.py4e.com/api/people/3/'
                }
            ]
        }
    })


    it('deve buscar o r2d2 com o formato correto', async () => {
        const expected = [{
            name: 'R2-D2',
            height: '96'
        }]
        const nomeBase = 'R2-D2'
        const result = await getPerson(nomeBase)

        assert.deepStrictEqual(result, expected)
    })
})