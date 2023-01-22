//Aula listas e manipulação



//Aula de Promises - refatorando Callbacks

/*
0 obter um usuário
1 obter o numero de telefone de um usuário a partir de seu id
2 obter o endereço do usuário pelo id

*/

//importamos um modulo interno do node.js

//versão com modulo do nodejs


//events

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {

// }

// const myEmitter = new MyEmitter();

// const nomeEvento = 'usuário:Click'

// const stdin = process.openStdin()

// function main() {
//     return new Promise(function (resolve, reject) {
//         stdin.addListener('data', function (value) {
//             //console.log(`Você digitou ${value.toString().trim()}`)
//             return resolve(value)
//         })
//     })

// }

// main().then(function (result) {
//     console.log('resultado', result.toString())
// })


//----------------------------------------------------------------

// myEmitter.on(nomeEvento, function (click) {
//     console.log('um usuario clicou', click)
// })


// myEmitter.emit(nomeEvento, 'na barra de rolagem')
// myEmitter.emit(nomeEvento, 'no ok')


// let count = 0
// setInterval(() => {
//     myEmitter.emit(nomeEvento, 'no ok ' + (count++))
// }, 1000);



///----------------------------------------------------------------



//const util = require('util');
/* //const getUserAdressAsync = util.promisify(getUserAddress)
//anotação arrow functins dependem da declaração todas as atribuições devem ser feitas abaixo das declarações

//refatoração com async e await

const getUser = () => {
    //quando der algum problema -> reject(error)
    //quando for sucesso =>resolve
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: "John Doe",
                birthDate: new Date()
            })
        }, 1000)
    })

}

const getUserPhone = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: '1199002',
                ddd: '11'
            })
        }, 2000)
    })
}

const getUserAddress = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                street: 'Rua das pamonhas',
            })
        }, 2000)
    })
}

// 1o  passo adicionar a palavra async -> automaticamente ela retornará uma promise
async function main() {
    try {
        console.time('medida-promise:')
        const user = await getUser()

        //const telefone = await getUserPhone(user.id)
        //const endereco = await getUserAddress(user.id)
        const result = await Promise.all([
            getUserPhone(user.id),
            getUserAddress(user.id),
        ])
        const endereco = result[1]
        const telefone = result[0]

        console.log(`
            Nome: ${user.name} \n
            Telefone: (${telefone.ddd}) ${telefone.number} \n
            endereco: ${endereco.street} \n
        `)
        console.timeEnd('medida-promise:')
    } catch (error) {
        console.error('Deuruim', error)

    }
}

main() */
//versão com promise

/* const getUser = () => {
    //quando der algum problema -> reject(error)
    //quando for sucesso =>resolve
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: "John Doe",
                birthDate: new Date()
            })
        }, 1000)
    })

}

const getUserPhone = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: '1199002',
                ddd: '11'
            })
        }, 2000)
    })
}

const getUserAddress = (userId, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Rua das pamonhas',
        })
    }, 2000)
}

const getUserAdressAsync = util.promisify(getUserAddress)

const userPromise = getUser()
//para manipular o sucesso usamos a função .then
//para manipular errors, usamos o .catch

//pipeline => usuário -> telefone -> telefone

userPromise
    .then((user) => {
        return getUserPhone(user.id)
            .then((phone) => {
                return {
                    user: {
                        id: user.id,
                        name: user.name,
                    },
                    phone: {
                        number: phone.number,
                        ddd: phone.ddd
                    }
                }
            })
    })
    .then((result) => {
        const address = getUserAdressAsync(result.user.id)
        return address.then((r) => {
            return {
                user: result.user,
                phone: result.phone,
                address: r
            }
        })
    })
    .then(
        (result) => {
            //console.log('resultado', result)
            console.log(`
            Nome: ${result.user.name}
            Telefone: ${result.phone.number}
            Endereço: ${result.address.street}
        `)
        }
    )
    .catch((error) => {
        console.error('deu ruim', error)
    }) */



//versão sem o modulo do nodejs
/* const getUser = () => {
    //quando der algum problema -> reject(error)
    //quando for sucesso =>resolve
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: "John Doe",
                birthDate: new Date()
            })
        }, 1000)
    })

}

const getUserPhone = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: '1199002',
                ddd: '11'
            })
        }, 2000)
    })
}

const getUserAddress = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                street: 'Rua das pamonhas',
            })
        }, 2000)
    })

}

const userPromise = getUser()
//para manipular o sucesso usamos a função .then
//para manipular errors, usamos o .catch

//pipeline => usuário -> telefone -> telefone

userPromise
    .then((user) => {
        return getUserPhone(user.id)
            .then((phone) => {
                return getUserAddress(user.id)
                    .then((address) => {
                        return {
                            user: {
                                id: user.id,
                                name: user.name,
                            },
                            phone: {
                                number: phone.number,
                                ddd: phone.ddd
                            },
                            address: {
                                street: address.street
                            }

                        }
                    })
            })
    })
    .then(
        (result) => {
            console.log('resultado', result)
        }
    )
    .catch((error) => {
        console.error('deu ruim', error)
    })
 */

//Aula de Callbacks

/*
0 obter um usuário
1 obter o numero de telefone de um usuário a partir de seu id
2 obter o endereço do usuário pelo id

*/

/* const getUser = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: "John Doe",
            birthDate: new Date()
        })
    }, 1000)
}

const getUserPhone = (userId, callback) => {
    setTimeout(() => {
        return callback(null, {
            number: '1199002',
            ddd: '11'
        })
    }, 2000)
}

const getUserAddress = (userId, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Rua das pamonhas',
        })
    }, 2000)
} */



/* getUser(function handleUser(error, user) {
    //null || "" || 0 === false
    if (error) {
        console.error('Deu Ruim', error);
        return;
    }
    getUserPhone(user.id, function handleUserPhone(error1, phone) {
        if (error1) {
            console.error('Tem telefone aqui não', error1);
            return;
        }
        getUserAddress(user.id, function handleUserAddress(error2, address) {
            if (error2) {
                console.error('Tem endereço aqui não', error2);
                return;
            }
            console.log(
                `
                 Nome: ${user.name} \n
                 Telefone: ${phone.number} \n
                 Endereço: ${address.street}
                `

            )
        })
    })


}) */
//const userPhone = getUserPhone(user.id);
//const userAddress = getUserAddress();

//console.log('ususário', userPhone);