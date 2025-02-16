import express from 'express';
import { connect, } from './server/db.js';
import router from './view/routes.js';


const app = express();
const port = 3000;


app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

connect();