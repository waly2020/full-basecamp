"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = void 0;
const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send({ message: "Logged out" });
        }
    });
};
exports.logOut = logOut;
