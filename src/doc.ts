import { connect, model, Schema } from "mongoose";
import 'dotenv/config'
const MONGO_HOST = process.env.MONGO_HOST || "localhost"; 
const MONGO_PORT = process.env.MONGO_PORT || "27017"; 
console.log("MONGO_HOST:",MONGO_HOST);
console.log("MONGO_PORT:",MONGO_PORT);

const uri: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/local`;

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export const DocSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Doc = model("Book", DocSchema);
export default Doc;