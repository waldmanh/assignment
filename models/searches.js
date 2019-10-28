let mongoose = require('mongoose')

let searchesSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    textSearched:{
        type:String,
        required:true
    },
    numOfSearches:{
        type:Number,
        required:true
    }
})

let Searches = module.exports =     mongoose.model('Searches',searchesSchema)