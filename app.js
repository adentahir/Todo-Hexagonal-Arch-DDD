const express = require('express');
//const debug = require('debug')('app');


const app = express();

app.get('/', (req, res)=> {
    res.send('Hello from my app');
})

app.get('/hello', (req, res)=> {
    res.send('Hello world');
})

app.listen(3000, ()=> {
    //console.log('listening on port 3000');
    debug('listening on port 3000');
})