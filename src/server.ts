import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('ui')
});

app.listen(3333);