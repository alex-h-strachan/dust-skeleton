/* eslint-disable no-console*/
import express from 'express';
import router from './router';

const app = express();
app.use(router);

app.use(express.static('./static'));

app.listen(process.env.PORT || 3000);
console.log('listening on', process.env.PORT || 3000);
