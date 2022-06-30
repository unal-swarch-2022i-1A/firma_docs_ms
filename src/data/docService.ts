import { connect, model, Schema } from "mongoose";
import 'dotenv/config'
const MONGO_HOST = process.env.MONGO_HOST || "localhost"; 
const MONGO_PORT = process.env.MONGO_PORT || "27017"; 
const MONGO_DB = process.env.MONGO_DB || "local"; 
console.log("MONGO_HOST:",MONGO_HOST);
console.log("MONGO_PORT:",MONGO_PORT);
console.log("MONGO_DB:",MONGO_DB);

const uri: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

/**
 * [{"_id":1,"name":"NullaElit.pdf","author":29,"path":"N9rVm2","mime":"application/pdf"},
 */
export const DocSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  path: { type: String, required: true },
  mime: { type: String, required: true },
});

const DocService = model("Book", DocSchema);
export default DocService;