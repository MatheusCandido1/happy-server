import express from 'express';

import './database/connection';

const app = express();

app.get('/users', (request, response) => {
    console.log('ui')
});

app.listen(3333);