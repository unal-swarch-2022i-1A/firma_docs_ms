"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoc = exports.allDocs = exports.addDoc = void 0;
const document_1 = require("./../document");
//POST /docs { file: blob } -H: Token: Crear
let addDoc = (req, res) => {
    let doc = new document_1.default(req.body);
    doc.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(doc);
        }
    });
};
exports.addDoc = addDoc;
//GET  /docs {  } -H: Token: Listar todos los del usuario
let allDocs = (req, res) => {
    let docs = document_1.default.find((err, docs) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(docs);
        }
    });
};
exports.allDocs = allDocs;
//GET  /docs:id {  } -H: Token: Obtener info del doc
//PATCH  /docs:id { [metada] } -H: Token: Actualizar metadata
//DELETE  /docs:id {} -H Token: Eliminar doc
let deleteDoc = (req, res) => {
    document_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the Document");
        }
    });
};
exports.deleteDoc = deleteDoc;
//# sourceMappingURL=docController.js.map