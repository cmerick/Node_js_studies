const ICrud = require("../interfaces/interfaceCrud")


class ContextStrategy extends ICrud {
    constructor(strategy) {
        super()
        this._database = strategy
    }
    create(item) {
        return this._database.create(item)
    }
    read(query) {
        return this._database.read(query)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    deleted(id) {
        return this._database.delete(id)
    }
}

module.exports = ContextStrategy;