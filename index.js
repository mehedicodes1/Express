import express from 'express';
import { connect } from './server/db.js';
import router from './view/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Call cors as a function
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

connect();
