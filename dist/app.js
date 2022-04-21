"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const docController = require("./controllers/docController");
const bodyParser = require("body-parser");
const app = express();
app.set("port", process.env.PORT || 3000);
//app.set("port", 3000);
app.use(bodyParser.json());
app.get('/docs', docController.allDocs);
app.post('/docs/:id', docController.addDoc);
app.delete('/docs', docController.deleteDoc);
app.listen(app.get("port"), () => {
    console.log("App is runing on http://localhost:%d", app.get("port"));
});
//# sourceMappingURL=app.js.map