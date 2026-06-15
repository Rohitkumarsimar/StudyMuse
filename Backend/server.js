import express from 'express'
import dotenv from 'dotenv'
import { logMethod } from './src/middleware/logger.middleware.js'
import {router} from './src/routes/auth.routes.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(logMethod)

app.use(express.json())
app.use('/auth',router)


app.listen(PORT || 3000, ()=>{
  console.log(`Server is connected to http://localhost:${PORT || 3000}`)
} )    