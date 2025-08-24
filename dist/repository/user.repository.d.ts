import type { IUser } from "../models/user.model.js";
declare class UserRepository {
    createUser(data: Omit<IUser, "_id" | "createdAt" | "updatedAt">): Promise<IUser>;
}
export default UserRepository;
//# sourceMappingURL=user.repository.d.ts.map