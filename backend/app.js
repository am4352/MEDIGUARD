import express from "express";
const app = express();
app.use(express.json());

import bodyParser from "body-parser";
import drugRoute from "./routes/drugRoute.js"
import interactionRoutes from "./routes/interactionRoutes.js";
const PORT = 3000;


app.use("/api", interactionRoutes);
app.use("/api/drugs", drugRoute)
app.listen(PORT, () => {
    console.log(`server running on port${PORT}`);
})
























