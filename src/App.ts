import express, { Request, Response } from "express";

class App {
    public express:any;
    constructor(){
        this.express = express();
        this.router();
    }
    private router():void {
        let router:any = express.Router();
        router.get("/",(req:Request,res:Response) => {
            res.send("working fine");
        });
        this.express.use("/", router);
    }
};

export default new App().express;