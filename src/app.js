import express from "express";
import path from "path";
import { __dirname } from "./paths.js";
import appRoutes from "./routes/app.routes.js";

const app = express();

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/app', appRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

export default app;