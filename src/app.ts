import express, { Request, Response } from "express";

import * as docController from "./controllers/docController";

import 'dotenv/config'
console.log("APP PORT:",process.env.PORT) 

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 8091);
// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints
app.get("/docs", docController.allDocs);
app.get("/docs/:id", docController.getDoc);
app.post("/docs", docController.addDoc);
app.put("/docs/:id", docController.updateDoc);
app.delete("/docs/:id", docController.deleteDoc);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});