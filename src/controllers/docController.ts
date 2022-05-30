// controllers/bookController.ts
import { Request, Response } from "express";
import Doc from "./../doc";

// We'll start with allBooks which will return
// every we have from our database
export let allDocs = (req: Request, res: Response) => {
  let docs = Doc.find((err: any, docs: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(docs);
    }
  });
};

export let getDoc = (req: Request, res: Response) => {
    let doc = Doc.findById(req.params.id, (err: any, doc: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
};

export let deleteDoc = (req: Request, res: Response) => {
    let doc = Doc.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully Deleted Document");
        }
    });
};

export let updateDoc = (req: Request, res: Response) => {
    console.log(req.body);
    let doc = Doc.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, doc: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Succesfully updated doc!");
            }
        }
    );
};

export let addDoc = (req: Request, res: Response) => {
    var doc = new Doc(req.body);
    console.log(req.body);
    console.log(doc);
    doc.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(doc);
            res.send(doc);
        }
    });
};