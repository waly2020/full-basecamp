// import { Role } from "@prisma/client";
import session from "express-session";

export interface CustomSession extends session.Session {
  user?: {
    id: number;
    name: string;
    role?: string | null;
    projects?: string;
  };
}
