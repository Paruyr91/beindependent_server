const expres = require('express')
const router= expres.Router() 

const RegisterControler=require('./controler/RegisterControler')
 
router.post('/volunteer', RegisterControler.signUp)






 module.exports=router