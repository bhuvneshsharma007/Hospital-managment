import 'dotenv/config'
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res)=>{
    res.send("Bhuvnesh Sharma ki facebook")
})
app.get('/login',(req,res)=>{
    res.send('<h1> Why the fuck you are not logging in you ediot <h1>')
})
 app.get("/youtube",(req,res)=>{
    res.send("welcome to the hospital yuotube page,please like, follow and suscribe for that")
 })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})