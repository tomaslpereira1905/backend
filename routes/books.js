import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();
// return first 50 documents from movies collection


//Ponto 1 a funcionar
//Alterar o numero 2 para mudar cada página
//http://localhost:3000/books?page=2
router.get("/", async(req,res)=>{
let page = req.query.page;
let results = await db.collection('books').find({}).
skip((page*10)-10).limit(10)
.toArray();

res.send(results).status(200);
});

//Ponto 2 
//POST /books - Adicionar 1 ou vários livros

//Ponto 5
//GET /books/:id - Pesquisar livro pelo _id: Resposta deverá incluir toda a informação do livro, o average score e a lista de todos os comentários
router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    let results = await db.collection('books').find({_id: id })
    .limit(50)
    .toArray();
    
    res.send(results).status(200);
});
 



export default router;
