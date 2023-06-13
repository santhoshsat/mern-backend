const express = require('express');
const app =express()
const PORT =3500
app.get('/',(req,res)=>{
    res.send("welcome to weather app")
})
app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`)
})