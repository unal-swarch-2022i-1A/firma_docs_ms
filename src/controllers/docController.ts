import { request, Request, Response} from 'express';
import Doc from './../document';

//POST /docs { file: blob } -H: Token: Crear
export let addDoc = (req: Request, res: Response) => {
    let doc = new Doc(req.body);

    doc.save((err:any) => {
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    })
}
//GET  /docs {  } -H: Token: Listar todos los del usuario
export let allDocs = (req: Request, res: Response) => {
    let docs = Doc.find((err:any, docs: any) => {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    })
}
//GET  /docs:id {  } -H: Token: Obtener info del doc
//PATCH  /docs:id { [metada] } -H: Token: Actualizar metadata
//DELETE  /docs:id {} -H Token: Eliminar doc
export let deleteDoc = (req: Request, res: Response) =>{
    Doc.deleteOne({ _id: req.params.id}, (err:any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Successfully deleted the Document")
        }
    })
}
