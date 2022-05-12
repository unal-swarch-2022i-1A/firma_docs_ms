import * as mongoose from 'mongoose'

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err:any) => {
    if (err){
        console.log(err.message);
    }else{
        console.log("Successfully Connected to MongoDB");
    }

})

export const DocSchema = new mongoose.Schema({
    //ID: {type:String, reqiured: true},
    name: {type:String, reqiured: true},
    folder: {type:String, reqiured: true}
});

const Doc = mongoose.model('Doc', DocSchema);
export default Doc;
