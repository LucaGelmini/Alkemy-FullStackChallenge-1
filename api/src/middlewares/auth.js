const bcrypt = require('bcrypt');
const User = require('../database/models/User')


async function authMiddleware (req, res, next){
    // is an eMail or a username?
    function isMail(input){                                     
        const mailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g   
        return null !== input.match(mailRegEx)?                 
        true: false                                             
    };
    const oldUserOrEmail = req.body.userOrEmail;                                               
    const userOrEmail = new Object();                             
    req.body.userOrEmail[                                                
        isMail(oldUserOrEmail) ? 'email' : 'username'     
        ] = oldUserOrEmail;     
        console.log('>>>>>>>>>>>>>>>>>>>>>>>', req.body.userOrEmail)
        
        
        //authorization
        
        try{
            const userInfo = await User.findOne({
                where: userOrEmail,
                attributes: [
                    'id',"username", "name", "family_name",
                    "email","avatar_path", "createdAt","password"
                ]
            });
            if (!userInfo){throw 'User not found in database'}

            const passwordOk = await bcrypt.compare(req.body.password, userInfo.password);
            if (passwordOk){

                next();   
            }
        }catch(err){
            console.log(err)
            res.status(500).json();
        }

        
}

module.exports = authMiddleware;