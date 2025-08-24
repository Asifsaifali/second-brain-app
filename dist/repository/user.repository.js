import User from "../models/user.model.js";
class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        }
        catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }
}
export default UserRepository;
//# sourceMappingURL=user.repository.js.map