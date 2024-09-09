import express from "express";
import signUpRoutes from "./routes/signup";

const app = express();
app.use(express.json());

app.use(signUpRoutes);

export { app };
