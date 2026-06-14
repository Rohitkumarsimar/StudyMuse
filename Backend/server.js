import express from 'express'
import dotenv from 'dotenv'
import { logMethod } from './src/middleware/logger.middleware.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(logMethod)

app.get('/health',(req, res)=>{
  res.json({"status":"ok"})
})

app.listen(PORT || 3000, ()=>{
  console.log(`Server is connected to http://localhost:${PORT || 3000}`)
} )   