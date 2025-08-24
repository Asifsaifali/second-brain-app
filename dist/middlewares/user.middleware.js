import { z, ZodError } from "zod";
const userSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});
const validateUser = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    }
    catch (err) {
        if (err instanceof ZodError) {
            // ZodError has `issues` property, not `errors`
            const validationErrors = err.issues.map(issue => issue.message);
            return res.status(400).json({
                message: "Validation error",
                errors: validationErrors,
            });
        }
        next(err);
    }
};
export default validateUser;
//# sourceMappingURL=user.middleware.js.map