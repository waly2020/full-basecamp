import { Request, Response, NextFunction } from "express";
import { CustomSession } from "../../utils/types";
// import { Role } from "@prisma/client";

export const authRole = (role: "ADMIN" | "USER") => {
  return (
    req: Request & { session: CustomSession },
    res: Response,
    next: NextFunction
  ) => {
    if (req.session.user?.role === role) {
      next();
    } else {
      return res.sendStatus(403);
    }
  };
};
