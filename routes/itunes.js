var express = require('express')
var router = express.Router()
var axios = require('axios')

let Searches = require('../models/searches')

router.get('/query',(req,res)=>res.send('get itunes route'))
router.get('/topten',(req,res)=>{  
    // console.log(req.headers)  
    if (req.headers.username === undefined){
        res.json({message:'Search must contain username'})
    } else {
        let filter = {
            username: req.headers.username
        }
        let sort = {
            numOfSearches: -1
        }
        let limit = 10
        Searches
            .find(filter)
            .sort(sort)
            .limit(10)
            .then(docs=>{
                console.log(req.headers.username,' - top ten')
                res.json(docs)
            })
    }

})
router.get('/search',
async (req,res)=>{ 
    try{
        if (req.query.searchText === undefined)
            res.json({message:'search text cannot be = '+ req.query.searchText})
        else if (req.headers.username === undefined)
            res.json({message:'Search must contain username'})
        else{       
            const searchText = req.query.searchText
            const url = `https://itunes.apple.com/search?term=${searchText}&limit=25`
            console.log('url = ',url)   
            const response = await axios.get(url)            
            let filter = {
                username: req.headers.username,
                textSearched: searchText
            }
            let updateOrInsert = { 
                $inc:{
                    numOfSearches:1
                }
            }
            let config = {upsert: true, new: true}        
            Searches.findOneAndUpdate(filter,updateOrInsert,config,(err,search)=>{
                if (err){
                    console.log(err)
                } else {
                    console.log('search saved = ', search)
                }
            })
            res.json(response.data)
        }
    }catch(e){
        console.log('err = ',e)
        res.send(JSON.stringify(e))
    }
})
module.exports = router