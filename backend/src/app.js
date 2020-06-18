import dotenv from 'dotenv';

dotenv.config();


import express from 'express';
import AllowCors from './middlewares/cors';
import database from './database/connection';
import contatoRoutes from './routes/contatoRoutes';
// import cors from 'cors';


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(AllowCors);
        // this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
        
    }

    routes() {
        this.app.use('/contato', contatoRoutes)
    }
}

export default new App().app;
