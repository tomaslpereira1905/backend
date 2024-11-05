import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();
// return first 50 documents from movies collection
router.get("/", async (req, res) => {
let results = await db.collection('users').find({})
.limit(50)
.toArray();
res.send(results).status(200);
});

// Pesquisar pelo Id, falta o top 3 livros 
router.get("/:id", async (req, res) => {
    try {
        
        let results = await db.collection('users').find({
            _id: parseInt(req.params.id) 
        }).toArray();

        
        res.status(200).send(results);
    } catch (error) {
       
        res.status(500).send({ error: "Erro na busca de dados" });
    }
});



export default router;
