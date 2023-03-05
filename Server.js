const express = require('express')
const ConnectDb = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')

const app = express()

const port = 5000

app.use(express.json())
app.use('/api/Users',userRouter)

ConnectDb()

app.listen(port,console.log(`Server is running on ${port}`))
