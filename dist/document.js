"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocSchema = void 0;
const mongoose = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected to MongoDB");
    }
});
exports.DocSchema = new mongoose.Schema({
    //ID: {type:String, reqiured: true},
    name: { type: String, reqiured: true },
    folder: { type: String, reqiured: true }
});
const Doc = mongoose.model('Doc', exports.DocSchema);
exports.default = Doc;
//# sourceMappingURL=document.js.map