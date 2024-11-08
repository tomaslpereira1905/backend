import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();
// return first 50 documents from movies collection

//Pode ser apagado

router.get("/", async (req, res) => {
let results = await db.collection('books').find({})
.limit(50)
.toArray();
res.send(results).status(200);
});


//Até aqui

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

export default router;
