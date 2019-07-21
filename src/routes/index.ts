import express, { Request, Response } from "express";

export let IndexRouter:any = express.Router();
IndexRouter.get("/",(req:Request,res:Response) => {
     res.send("working fine");
});

IndexRouter.get('/register',(req:Request, res:Response) => {
    res.render("user/register");
});
IndexRouter.post('/register', (req:Request, res:Response) => {
    console.log(req.body);
});
// export default IndexRouter;