import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from "path";
import { IndexRouter } from "./routes/index";
import { config } from "./config/config";

class App {
    public app:any;
    constructor(){
        this.app = express();
        this.config();
    }
    
    //router setup
    private config():void {

        this.app.use(express.static(path.join(__dirname, "public")));

        //mongoose setup
        mongoose.connect(config.mongoDbURI,{ useNewUrlParser: true });
        let db:any = mongoose.connection;
        db.on('error', console.error.bind(console, "connection error: "));
        db.once('open', () => {
            console.log("db connected");
        });

        //body parser for json data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        //view engine setup
        this.app.set('view engine', 'ejs')

        //router setup
        this.app.use("/", IndexRouter);
    }
};

export default new App().app;