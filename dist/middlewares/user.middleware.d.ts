import type { Request, Response, NextFunction } from "express";
declare const validateUser: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default validateUser;
//# sourceMappingURL=user.middleware.d.ts.map