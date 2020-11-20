const mongoose = require('mongoose');
const User=require('../Schema/UserSchema')



class RegisterControler{
    constructor(){
    
    }
  


    async signUp(req,res){
      let value={
        eventHost:false,
        socialMedia:false,
        myNetwork:false,
        firstName:'',
        lastName:'',
        email:'',
        mobailePhone:undefined,
        sendEmailUpdates:false,
        sendMessages:false,
        phone:undefined,
        callTime:'',
        Address:'',
        availableTime:'',
        Comments:'',
        publish:false,
      }

    for (let i in value) {
       if(req.body[i]){
          value[i]=req.body[i]
       }  
     }
     
  User.create(value ).then(e=>{
        res.status(200).send(e)
      }).catch(err=>{
        res.status(400).send(err.errors)   
      });
     
    }    
 
}    


module.exports= new RegisterControler