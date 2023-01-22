const axios = require('axios')
const URL = 'https://swapi.py4e.com/api/people'

async function getPeople(name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
}

getPeople('R2')
    .then(function (result) {
        console.log('resultado', result)
    })
    .catch(function (error) {
        console.error('Deu ruim', error)
    })