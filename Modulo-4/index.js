const { Command } = require('commander')
const Database = require('./database');
const Heroi = require('./heroi');

const command = new Command();

async function main() {


    command
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poderdo Heroi")
        .option('-c, --cadastrar', "Cadastrar um Heroi")
        .option('-i, --id [value]', "Id do herói")
        .option('-l, --listar', "listar herois")
        .option('-r, --remover', "remover um heroi")
        .option('-a, --atualizar [value]', "atualizar um heroi")

    command.parse(process.argv)

    const options = command.opts()

    const heroi = new Heroi(options)


    try {
        if (options.cadastrar) {

            delete heroi.id
            //console.log(heroi)
            const resultado = await Database.cadastrarHeroi(heroi)
            if (!resultado) {
                console.error('Heroi não foi cadastrado!')
                return;
            }

            console.log('Heroi cadastrado com sucesso')
        }
        if (options.listar) {
            const resultado = await Database.listar()
            console.log(resultado)
            return;
        }
        if (options.remover) {
            const resultado = await Database.remover(options.id)
            if (!resultado) {
                console.error('Não foi possivel remover o heroi!')
                return;
            }
            console.log('Heroi removido com sucesso')

        }
        if (options.atualizar) {
            const idParaAtualizar = parseInt(options.atualizar)
            //remover todas as chaves que estiver com undefined | null
            //delete heroi.id
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if (!resultado) {
                console.error('Não foi possivel atualizar o heroi!')
                return;
            }
            console.log('Heroi atualizado com sucesso')
        }



    } catch (error) {
        console.error('Deu ruim', error)
    }

}

main()