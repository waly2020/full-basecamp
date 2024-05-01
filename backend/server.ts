import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/userRoutes";
import projectRoute from "./routes/projectRoutes";
import permissionRoute from "./routes/permissionRoutes";
import session from "express-session";
import { PrismaClient } from "@prisma/client";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import path from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT;
const HTML_FOLDER = path.join(__dirname, "../../frontend/build"); // Static files folder

// Middlewares
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET_KEY as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14,
      sameSite: "strict",
    },
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 30 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(express.json());
app.use(express.static(HTML_FOLDER));

// Routes

app.use(userRoute);
app.use(projectRoute);
app.use(permissionRoute);

app.listen(port, () => console.log(`App running on port ${port}`));
