import * as express from "express";
import * as docController from './controllers/docController';
import * as bodyParser from 'body-parser';

const app = express();
app.set("port", process.env.PORT || 3000);
//app.set("port", 3000);

app.use(bodyParser.json());

app.get('/docs', docController.allDocs);
app.post('/docs/:id', docController.addDoc);
app.delete('/docs', docController.deleteDoc);

app.listen(app.get("port"), () => {
    console.log("App is runing on http://localhost:%d", app.get("port"))
})