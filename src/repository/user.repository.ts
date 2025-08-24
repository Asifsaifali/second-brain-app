import User from "../models/user.model.js"
import type { IUser } from "../models/user.model.js";

class UserRepository{

    async createUser(data : Omit<IUser , "_id"|"createdAt"|"updatedAt">) : Promise<IUser>{
        try {
            const user = await User.create(data)
            return user;
        } catch (error) {
             console.error("Error creating user:", error);
        throw error;
        }
    }
}


export default UserRepository