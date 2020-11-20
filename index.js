const expres = require('express')
const app= expres()
const bodyParser=require('body-parser')
const session=require('express-session')
const router=require('./router')
const server=require('http').Server(app)
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://paruyr:123456db@cluster0.p0epc.mongodb.net/volunteer', {  useNewUrlParser: true,}) 

 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
   console.log('server conected')
 });
app.use(
    session({
        secret:'keybord cat',
        resave:false,
        saveUninitialized:true,
    })
) 
 
app.use(expres.static('public'))
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())




  
app.use(router)



server.listen(3030)


 