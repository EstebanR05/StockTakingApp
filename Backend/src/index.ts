import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

import UserRoute from "./routes/UserRoute";
import employeesRoute from "./routes/EmployeesRoute";
import replacementRoute from "./routes/replacementRoute";
import inventoryRoute from "./routes/inventoryRoute";

dotenv.config();

const app = express();
const _PORT = process.env.PORT_APPLICATION;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

//routes
app.use("/api", UserRoute);
app.use("/api/employees", employeesRoute);
app.use("/api/spareparts", replacementRoute );
app.use("/api/inventories", inventoryRoute); 

const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});
