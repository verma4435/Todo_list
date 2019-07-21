import express, { Request, Response } from "express";
import mongoose from "mongoose";

class App {
    public express:any;
    constructor(){
        this.express = express();
        this.connectMongoDb();
        this.router();
    }
    
    //router setup
    private router():void {
        let router:any = express.Router();
        router.get("/",(req:Request,res:Response) => {
            res.send("working fine");
        });
        this.express.use("/", router);
    }

    //function to connect to mongodb
    private connectMongoDb() {
        mongoose.connect("mongodb://localhost/test",{ useNewUrlParser: true });
        let db:any = mongoose.connection;
        db.on('error', console.error.bind(console, "connection error: "));
        db.once('open', () => {
            console.log("db connected");
        });
    }
};

export default new App().express;