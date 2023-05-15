import express from 'express';
import routes from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';

const app = express();

app.use(cors());

app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}))

app.use('/',routes);


const PORT = 3000;

Connection();

app.listen(PORT, () => console.log(`server is running successfully ${PORT}`));