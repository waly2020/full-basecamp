"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const permissionRoutes_1 = __importDefault(require("./routes/permissionRoutes"));
const express_session_1 = __importDefault(require("express-session"));
const client_1 = require("@prisma/client");
const prisma_session_store_1 = require("@quixo3/prisma-session-store");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT;
const HTML_FOLDER = path_1.default.join(__dirname, "../../frontend/build"); // Static files folder
// Middlewares
app.use((0, cors_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14,
        sameSite: "strict",
    },
    store: new prisma_session_store_1.PrismaSessionStore(new client_1.PrismaClient(), {
        checkPeriod: 30 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
    }),
}));
app.use(express_1.default.json());
app.use(express_1.default.static(HTML_FOLDER));
// Routes
app.use(userRoutes_1.default);
app.use(projectRoutes_1.default);
app.use(permissionRoutes_1.default);
app.listen(port, () => console.log(`App running on port ${port}`));
