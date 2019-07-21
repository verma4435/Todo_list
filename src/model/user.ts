import { Model, Schema, Document, model } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
    //custom method to be defined here
}

export let UserSchema:Schema = new Schema({
    userName: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
});

UserSchema.pre<IUserModel>("save", function(next){
    let user = this;
    user.createdAt = new Date();
    next();
});


export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);