import { Request, Response } from "express";

export const logOut = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ message: "Logged out" });
    }
  });
};
