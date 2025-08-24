import UserRepository from "../repository/user.repository.js";
const userRepo = new UserRepository();
const createUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await userRepo.createUser(data);
        return res.status(201).json({
            message: "User created successfully",
            success: true,
            data: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
export { createUser };
//# sourceMappingURL=user.controller.js.map