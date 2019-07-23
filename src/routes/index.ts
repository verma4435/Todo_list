import express, { Request, Response } from "express";
import { User } from "../model/user"
export let IndexRouter:any = express.Router();
IndexRouter.get("/",(req:Request,res:Response) => {
     res.send("working fine");
});

IndexRouter.get('/register',(req:Request, res:Response) => {
    res.render("user/register",{title:"User Register"}); 
});
IndexRouter.post('/register', (req:Request, res:Response) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save().then(result =>{
        res.redirect("/dashboard");
    }).catch(err =>{
        res.json(err);
    });

});
//router for login
IndexRouter.get("/login", (req:Request, res:Response) => {
    res.render(
        "user/login",
        {
            title:"User Login"
        }
    );
});

IndexRouter.post(
    "/login",
    (req:Request, res:Response) => {
        let user = req.body;
        console.log(user);
        User.findOne({"userName": user.userName}, function (err,user) {
            if(err) {
                res.send(err);
            }
            res.send({"final":user});
        })
    }
);
//router for dashboard
IndexRouter.get('/dashboard', (req:Request, res:Response) => {
    res.send("in dashboard");
});
// export default IndexRouter;