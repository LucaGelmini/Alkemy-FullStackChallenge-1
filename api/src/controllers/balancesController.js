const { Sequelize } = require('../database/models');
const db = require('../database/models');

const userBalanceSqlLiteral = `
CASE
    WHEN isnull(record_date)
    THEN createdAt
    ELSE record_date
END AS record_date
`

module.exports = {
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
            res.status(200).json({data: userBalance, status: 200})
        }catch(e){res.status(500).json({errorMessage:e.errors.map(o=>o.message)})}
    },
    createUserBalance: async(req,res)=>{
        const newRegister = req.body
        try{
            const dbFeedback = await db.Balance.create(newRegister)
            res.status(200).json({dbFeedback, status: 200})
        }catch(e){res.status(500).json({errorMessage:e.errors.map(o=>o.message)})}
    },
    //A terminar
    editUserBalance: ()=>null,
    destroyUserBalance: ()=>null
}