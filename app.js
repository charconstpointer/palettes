const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const colorController = require('./src/controllers/colorController')
const paletteController = require('./src/controllers/paletteController')

const app = express()
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://kurwa:dzialaj@users-shard-00-00-dfrof.mongodb.net:27017,users-shard-00-01-dfrof.mongodb.net:27017,users-shard-00-02-dfrof.mongodb.net:27017/colors?ssl=true&replicaSet=Users-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true })
    .then(s => console.log("connected"))
    .catch(e => console.error(e))

app.all('*', (req, res, next) => {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/api/color', colorController)
app.use('/api/palette', paletteController)

app.get('/', (req, res) => res.send('/root'))

app.listen(port, () => console.log(`listening on ${port}!`))