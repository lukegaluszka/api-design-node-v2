import express from 'express';
// Declare an app from express
const app = express();

app.get('/', (req, res) => {
    res.json({'loaded': true});
});

app.get('/test', (req, res) => {
    res.json({'test': true});
});


export default app;
