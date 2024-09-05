const express = require('express')
const app = express
const cookieParser = require('cookie-parser')
require('dotenv').config()
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')



/// middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser)


app.use('/api', userRouter)
app.use('/api', postRouter)


// route
app.get('/', (req, res) => {
    res.send("Hello Sir ji")
})

app.listen(PORT, () => {
    console.log("Server is runing on localhost:3000");

})