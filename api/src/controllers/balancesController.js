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

module.exports = {
    // READ
    userBalance: async (req,res)=>{
        const userId = req.params.id;
        try{
            const userBalance = await db.Balance.findAll({
                include: [
                    {association: 'operationType'},
                ],
                attributes:[
                    'id','concept','amount', 'type_id','user_id', 'record_date',
                Sequelize.literal(userBalanceSqlLiteral),
            'createdAt', 'updatedAt'],
                where: {
                    user_id: userId
                },
            })
            console.log(userBalance.map(e=>e.record_date))
            res.status(200).json({data: userBalance, status: 200})
        }catch(e){res.status(500).json(dbErrorsHandler(e))}
    },
    // CREATE
    createUserBalance: async(req,res)=>{
        const newRegister = req.body;
        const user = Number(req.params.id);
        try{
            const dbFeedback = await db.Balance.create({...newRegister, user_id: user})
            res.status(200).json({dbFeedback, status: 200})
        }catch(e){res.status(500).json(dbErrorsHandler(e))}
    },
    // DESTROY
    destroyUserBalance: async(req, res)=>{
        const balanceId = req.params.id;
        try{
            const dbFeedback = await db.Balance.destroy({
                where:{
                    id: balanceId
                }
            })
            res.status(200).json({dbFeedback, status: 200})
        }catch(e){res.status(500).json(dbErrorsHandler(e))}
    },
    editUserBalance: async (req,res)=>{
        const balanceId = req.params.id;
        try{
            const patchedReg = await db.Balance.update({
                concept: req.body.concept,
                amount: req.body.amount,
                user_id: req.body.user_id,
                record_date: req.body.record_date
            },{where: {id: balanceId}});
            res.status(200).json({patchedReg, status: 200})
        }catch(e){res.status(500).json(dbErrorsHandler(e))}
    }
}