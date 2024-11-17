import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();


// return first 50 documents from movies collection
// router.get("/", async (req, res) => {
// let results = await db.collection('comments').find({})
// .limit(50)
// .toArray();
// res.send(results).status(200);
// });


//Ponto 18 (Verificado)
// router.post('/', async (req, res) => {
//     const { user_id, book_id, comment } = req.body;
//     let result;
//     if(book_id == null || user_id == null || comment == null){
//         return res.status(400).send({message: "book_id, user_id e comment são campos obrigatórios"});
//     }
//     try{
//         const lastComment = await db.collection('comments').find().sort({_id: -1}).toArray();
//         let lastCommentId = 1;
//         if(lastComment.length > 0 ){
//             lastCommentId =lastComment[0]._id + 1;
//         }

//        const trueBookId = await db.collection('books').findOne({ _id: book_id});
//        const trueUserId = await db.collection('users').findOne({ _id: user_id});

//         if( !trueBookId  || !trueUserId ){
//             return res.status(404).send({ message: "Livro ou User não existem"});
//         }
//         const newComment = {
//             _id : lastCommentId,
//             user_id: user_id,
//             book_id: book_id,
//             comment,
//             date: new Date()
//         };
//         result = await db.collection('comments').insertOne(newComment);
//         res.status(200).send({ message: "Comentário adicionado com sucesso", comment: newComment});
//     }catch (error){
//         res.status(500).send({message: "Erro ao adicionar comentário"})
//     }
// });

//Ponto 19 (Verificado)

// router.delete("/:id", async (req, res) =>{
//     const commentId = parseInt(req.params.id);
//     try{
//         const comment = await db.collection('comments').deleteOne({_id: commentId});
       
//         if( comment.deletedCount == 0 ) {
//             return res.status(404).send({ message: "Comentário não encontrado"});

//         }else{
//             res.status(200).send({message: "Comentário removido com sucesso"});
//         }

//     } catch (error) {
//         res.status(500).send({message: "Erro ao remover Comentário", error: error.message});

//     }
// });



export default router;
