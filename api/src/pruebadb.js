const db = require('./database/models')
const OperationType = require('./database/models/OperationType')

db.Balance.findAll({
    include: [{association: 'operationType'},{association: 'user'}]
}).then((data)=>console.log(data[0].operationType))