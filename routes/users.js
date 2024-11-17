import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();

// return first 50 documents from movies collection
// router.get("/", async (req, res) => {
// let results = await db.collection('users').find({})
// .limit(50)
// .toArray();
// res.send(results).status(200);
// });


//Ponto 2 (Verificado)

// router.get("/", async(req,res)=>{
// let page = req.query.page;
// let results = await db.collection('users').find({}).
// skip((page*10)-10).limit(10)
// .toArray();
// res.send(results).status(200);
// });

//Ponto 4 (Verificado)
// router.post("/", async(req, res) => {
//     const users = req.body; // receber os utilizadores adicionados
//     let result;

//     try {
//         if (users._id == null || users.first_name == null || users.last_name == null || users.year_of_birth == null || users.job == null || users.reviews == null) {
//             return res.status(400).send({ message: "Tem de preencher todos os campos necessários para a criação de um User" });
//         }
//         // verificar se "users" é um único user ou um array de users
//         if(Array.isArray(users)) {
//             result = await db.collection('users').insertMany(users);
//         } else {
//             result = await db.collection('users').insertOne(users);
//         }
//         res.status(200).send(result);
//     } catch (error) {
//         res.status(500).send({ message: "Erro ao adicionar utilizador", error: error.message});
//     }
// })


//Ponto 6 (Verificado)
// Pesquisar pelo Id e o top 3 livros


// router.get("/:id", async (req, res) => {
//     try {
    
//         let userId = parseInt(req.params.id);
//         let user = await db.collection('users').findOne({ _id: userId });
//         if (!user) {
//             return res.status(404).send({ error: "Utilizador não foi encontrado" });
//         }
//         let topReviews = user.reviews
//             .sort((a, b) => b.score - a.score) // Ordena de forma decrescente
//             .slice(0, 3); // Escolhe as 3 com maior score
//         user.top_books = topReviews.map(review => review.book_id);

//         res.status(200).send(user);
//     } catch (error) {
//                 res.status(500).send({ error: "Erro, dados não encontrados" });
//     }
// });

//Ponto 8 (Verificado)

// router.delete("/:id", async (req, res) =>{
//     const userId = parseInt(req.params.id);
//     console.log(userId)
//     try{
//         const user = await db.collection('users').deleteOne({_id: userId})

//         if(user.deletedCount == 0) {
//             return res.status(404).json({ message: "Utilizador não encontrado"});

//         }
//             res.status(200).json({message: " Utilizador removido com sucesso"});
        
//     } catch (error) {
//         res.status(500).json({message: "Erro ao remover utilizador ", error: error.message});

//     }
// })

//Ponto 10 (Verificado)

// router.put('/:id', async (req, res) => {

//     const user_id = parseInt(req.params.id);
//     const updateData = req.body;

//     try {
//         const trueId = await db.collection('users').findOne({ _id: user_id });

//         if (!trueId) {
//             return res.status(404).send({ message: " Utilizador não encontrado" })
//         }

//         const updatedUser = await db.collection('users').findOneAndUpdate(
//             { _id: user_id },
//             { $set: updateData }
//         );

//         res.status(200).send({ message: "Utilizador atualizado com sucesso" })
//     } catch (error) {
//         res.status(500).send({ message: "Erro ao atualizar o Utilizador" })
//     }
// })

export default router;

