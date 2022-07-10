"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const homeRoutes_1 = __importDefault(require("./src/routes/homeRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const database = process.env.MONGODATABASE;
mongoose_1.default.connect(database);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
    console.log("Connection Sucesso");
});
app.use("/", homeRoutes_1.default);
const port = process.env.PORT || 3000;
// app.use(app.json());
app.listen(port, () => {
    console.log("Serve Port", port);
});
