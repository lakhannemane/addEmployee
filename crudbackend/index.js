import express from 'express'
import cors from 'cors'
import Routes from './route/routs.js'
const app  = express();

const port  = 7000 ;



app.use(express.json())
app.use(cors())
app.use('/' , Routes)

app.listen(port ,()=>{
    console.log(`your app listening on port no is ${port}`)
})