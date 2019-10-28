var express = require('express');
var app = express();
var itunes = require('./routes/itunes')
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/assignment',
mongoose.connect('mongodb://192.168.99.100/assignment',
{
     useNewUrlParser: true,
     useUnifiedTopology: true,
	 useFindAndModify: false
 } )

let db = mongoose.connection
db.once('open',()=>console.log('Connected to mongoDB'))
db.on('error',err=>console.log(err))

app.get('/data', (req, res) => {
    res.json([{
        data:'data'
    }])
})
app.use('/itunes',itunes)

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))