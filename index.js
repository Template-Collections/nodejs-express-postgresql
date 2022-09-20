import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

import maintenanceCompositeRoutes from "./modules/maintenance/composite/routes/index.js";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/maintenance", maintenanceCompositeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}.`);
});
