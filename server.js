const express= require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser') // used to print different API request responses.
const path=require('path')
const config=require('config')

const app=express()

// Body Parser Middleware

app.use(bodyParser.json())


//DB config

const db=config.get('mongoURI')

// Connect to MongoDB

mongoose
.connect(db)
.then(()=>console.log('MongoDB connected'))// when db is connected the function returns a promise and we can do stuff with it. 
.catch(err=>console.log(err))// otherwise print the error

//Use routes
app.use('/api/items',require('./routes/api/items'))// whatever is directed to /api/items refer it to items
app.use('/api/users',require('./routes/api/users'))// users are directed to /api/users
app.use('/api/auth',require('./routes/api/auth'))

//Serve static assets, (the build folder) if in production

if(process.env.NODE_ENV==='production'){
    //Set a static folder
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port=process.env.PORT || 5000  // For Heroku hosting we have to specify the port which the app will be using 

app.listen(port, ()=>console.log(`Server started on port ${port}`))