import { Request, Response, NextFunction } from "express";
import { CustomSession } from "../../utils/types";

export const requireAuth = (
  req: Request & { session: CustomSession },
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.user) {
    next();
  } else {
    return res.status(401).json({ message: "Not allowed" });
  }
};
