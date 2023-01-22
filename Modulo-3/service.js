const { get } = require('axios');

const URL = `https://swapi.py4e.com/api/people`

async function getPerson(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    return result.data.results.map(mapPerson)
}

function mapPerson(item) {
    return {
        name: item.name,
        height: item.height
    }
}

module.exports = {
    getPerson
}