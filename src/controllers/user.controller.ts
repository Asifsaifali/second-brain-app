import UserRepository from "../repository/user.repository.js";
import type { Request, Response } from "express";
const userRepo = new UserRepository();

const createUser = async (req: Request, res : Response) => {
    try {
        const data = req.body
        const user = await userRepo.createUser(data)
        return res.status(201).json({
            message: "User created successfully",
            success : true,
            data : user,
        })
    } catch (error) {
       return res.status(500).json({
            message: "Internal Server Error",
            success : false
        })
    }

}

export  { createUser };