const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()


app.use(cors()) 
app.get('/', async(req,res)=> {
    try {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
   
    // return res.json([
    //     {
    //         nome:'Felipe',
    //         sobrenome:'Medeiros',
    //         idade:18  
    //     },
    //     {
    //         nome:'David',
    //         sobrenome:'Deizepi',
    //         idade:24
            
    //     }
    // ])

})

app.listen('8000')
