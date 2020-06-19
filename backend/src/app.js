import dotenv from 'dotenv';

dotenv.config();


import express from 'express';
import AllowCors from './middlewares/cors';
// eslint-disable-next-line no-unused-vars
import database from './database/connection';
import contatoRoutes from './routes/contatoRoutes';
import { errors } from 'celebrate';
// import cors from 'cors';


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use('/contato/', contatoRoutes)
        this.app.use(errors());
    }

    middlewares() {
        this.app.use(AllowCors);
        // this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
    }



}

export default new App().app;
