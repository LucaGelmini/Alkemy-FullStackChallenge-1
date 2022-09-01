const { Sequelize } = require('../database/models');
const db = require('../database/models');
const { dbErrorsHandler } = require('./utils/balancesController');

const userBalanceSqlLiteral = `
CASE
    WHEN isnull(record_date)
    THEN createdAt
    ELSE record_date
END AS record_date
`

const findAllRegistersSQL = async (userId) => {
    const userBalance = await db.Balance.findAll({
        include: [
            { association: 'operationType' },
        ],
        attributes: [
            'id', 'concept', 'amount', 'type_id', 'user_id', 'record_date',
            Sequelize.literal(userBalanceSqlLiteral),
            'createdAt', 'updatedAt'],
        where: {
            user_id: userId
        },
    })
    return userBalance
}

module.exports = {
    // READ
    userBalance: async (req, res) => {
        const userId = req.params.id;
        try {
            const userBalance = await findAllRegistersSQL(userId)
            res.status(200).json({
                data: userBalance,
                status: 200
            })
        } catch (e) { res.status(500).json(dbErrorsHandler(e)) }
    },
    // CREATE
    createUserBalance: async (req, res) => {
        const user = Number(req.params.userId);
        const newRegister = req.body;
        try {
            await db.Balance.create({ ...newRegister, user_id: user })
            const balance = await findAllRegisters(user)
            res.status(200).json({ data: balance, status: 200 })
        } catch (e) { res.status(500).json(dbErrorsHandler(e)) }
    },
    // DESTROY
    destroyUserBalance: async (req, res) => {
        const balanceId = req.params.id;
        const userId = req.params.userId
        try {
            await db.Balance.destroy({
                where: {
                    id: balanceId
                }
            })
            const balance = await findAllRegisters(userId)
            res.status(200).json({ data: balance, status: 200 })
        } catch (e) { res.status(500).json(dbErrorsHandler(e)) }
    },
    // EDIT
    editUserBalance: async (req, res) => {
        const balanceId = req.params.id;
        const userId = req.params.userId
        try {
            await db.Balance.update({
                concept: req.body.concept,
                amount: req.body.amount,
                user_id: req.body.user_id,
                record_date: req.body.record_date
            }, { where: { id: balanceId } });
            const balance = await findAllRegisters(userId)

            res.status(200).json({ data: balance, status: 200 })
        } catch (e) { res.status(500).json(dbErrorsHandler(e)) }
    }
}