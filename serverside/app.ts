import cors = require('cors');
import express from 'express';
import router from './routes';
import bodyParser = require('body-parser');

export class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config():void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.routes();
    }

    private routes(): void {
        this.app.use('/', router);
    }
}