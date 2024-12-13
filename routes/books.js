import express from "express";
import db from "../db/config.js";

import { ObjectId } from "mongodb";
const router = express.Router();
// return first 50 documents from movies collection


//Ponto 1  (Verificado)
//Lista de livros com paginação
//Alterar o numero 2 para mudar cada página
//http://localhost:3000/books?page=2
// router.get("/", async (req, res) => {
//     let page = req.query.page;
//     const pageSize = 10;

// const totalBooks = await db.collection('books').countDocuments();
// const totalPages = Math.ceil(totalBooks / pageSize);

//     if (page > totalPages) {
//       page = totalPages;
//     }


//     const results = await db.collection('books')
//         .find({})
//         .skip((page - 1) * pageSize)
//         .limit(pageSize)
//         .toArray();

//     res.status(200).send({
//         currentPage: page,
//         totalPages: totalPages,
//         books: results});
// });


// //Ponto 3 (Verificado)
// //POST /books - Adicionar 1 ou vários livros
// router.post("/", async(req, res) => {
//   const books = req.body; // receber os livros adicionados
//   let result;

//   try {
//     if (books._id == null || books.title == null || books.isbn == null || books.pageCount == null || books.publishedDate == null || books.status == null || books.authors == null || books.categories == null || books.price == null) {
//               return res.status(400).send({ message: "Tem de preencher todos os campos necessários para a criação de um Livro" });
//           }
//       // verificar se "books" é um único livro ou um array de livros
//       if(Array.isArray(books)) {
//           result = await db.collection('books').insertMany(books);
//       } else {
//           result = await db.collection('books').insertOne(books);
//       }
//       res.status(200).send(result);
//   } catch (error) {
//       res.status(500).send({ message: "Erro ao adicionar livro", error: error.message});
//   }
// })

//Ponto 5 (Verificado)

// router.get("/:id", async (req, res) => {
//     try {
//         const bookId = parseInt(req.params.id);
//         if (isNaN(bookId)) {
//             return res.status(400).json({ message: "ID do livro não é válido" });
//         }

//         // Encontrar livro pelo ID

//         const book = await db.collection('books').findOne({ _id: bookId });
//         if (!book) {

//             return res.status(404).json({ message: "Livro não encontrado" });
//         }

//         //Calcular o average Score

//         const bookScores = await db.collection('users').aggregate([
//             { $unwind: "$reviews" },
//             { $match: { "reviews.book_id": bookId } },
//             {
//                 $group: {
//                     _id: "$reviews.book_id",
//                     averageScore: { $avg: "$reviews.score" }
//                 }
//             }
//         ]).toArray();

//         const averageScore = bookScores.length > 0 ? bookScores[0].averageScore : null;
//         // Verificar se o array está vazio, em caso negativo, atribui o valor do primeiro campo, no caso bookScore[0].averageScore, no caso de estar vazio devolve null
//         //Encontrar comentários do livro

//         const bookComments = await db.collection('comments').find({ book_id: bookId }).toArray();

//         //Forma da estrutura da resposta
//         const response = {
//             ...book,
//             averageScore,
//             comments: bookComments
//         };

//         res.status(200).json(response);
//     } catch (error) {

//         res.status(500).json({ message: "Erro ao devolver detalhes do livro" });
//     }
// });

//   //Ponto 7 (Verificado)

//   router.delete("/:id", async (req, res) =>{
//     const bookId = parseInt(req.params.id);
//    // console.log(bookId)
//     try{
//         const book = await db.collection('books').deleteOne({_id: bookId});
//         if( book.deletedCount == 0 ) {
//             return res.status(404).send({ message: "Livro não encontrado"});

//         }else{
//             res.status(200).send({message: "Livro removido com sucesso"});
//         }
//     } catch (error) {
//         res.status(500).send({message: "Erro ao remover Livro", error: error.message});
//     }
// })

//Ponto 9 (Verificado)

// router.put('/:id', async (req, res) => {

//     const book_id = parseInt(req.params.id);
//     const updateData = req.body;
//     try {
//         const trueId = await db.collection('books').findOne({ _id: book_id });
//         if (!trueId) {
//             return res.status(404).send({ message: "Livro não encontrado" })
//         }
//         const updatedBook = await db.collection('books').findOneAndUpdate(
//             { _id: book_id },
//             { $set: updateData }
//         );
//         if (updatedBook.findCount == 0) {
//             return res.status(400).send({ message: "Não foi possivel dar update ao livro" });
//         }
//         res.status(200).send({ message: "Livro atualizado com sucesso" })
//     } catch (error) {
//         res.status(500).send({ message: "Erro ao atualizar o Livro" })
//     }
// });


//Ponto 11 (Verificado)
//http://localhost:3000/books/top?limit=5&page=2

// router.get('/top', async (req, res) => {
//     const limit = parseInt(req.query.limit) || 10; // Número de livros por página (padrão: 10)
//     let page = parseInt(req.query.page) || 1; // Página atual (padrão: 1)

// const totalBooks = await db.collection('books').countDocuments();
// const totalPages = Math.ceil(totalBooks / pageSize);



//     try {
//       // Calcular a média dos scores dos livros, ordenar por média descendente e aplicar paginação
//       const bookScores = await db.collection('users').aggregate([
//         { $unwind: "$reviews" },
//         {
//           $group: {
//             _id: "$reviews.book_id",
//             averageScore: { $avg: "$reviews.score" } // Calcula a média de score para cada livro
//           }
//         },
//         { $sort: { averageScore: -1 } }, // Ordena pela média de pontuação em ordem decrescente
//         { $skip: (page - 1) * limit }, // Ignora os documentos das páginas anteriores
//         { $limit: limit } // Limita o número de livros na resposta
//       ]).toArray();

//       // Extrair os IDs dos livros para buscar informações completas
//       const bookIds = bookScores.map(book => book._id);

//       // Buscar os detalhes dos livros na coleção "books" com base nos IDs
//       const books = await db.collection('books').find({ _id: { $in: bookIds } }).toArray();

//       // Adicionar a média de score a cada livro
//       const booksWithScores = books.map(book => {
//         const bookScore = bookScores.find(score => score._id === book._id);
//         return {
//           ...book,
//           averageScore: bookScore ? bookScore.averageScore : null
//         };
//       });

//       if(page > totalPages){
//             page = totalPages;
//       }
//       // Estruturar a resposta com paginação
//       const response = {
//         pagination: {
//           currentPage: page,
//           totalPages: totalPages,
//           booksPerPage: limit,
//         },
//         books: booksWithScores.sort((a, b) => b.averageScore - a.averageScore) // Ordenação descendente
//       };

//       res.status(200).send(response);
//     } catch (error) {

//       res.status(500).send("Erro na procura de livros com maior pontuação média");
//     }
//   });




//Ponto 12 (Verificado)
//http://localhost:3000/books?limit=5&page=1&order=desc
// router.get("/rating/:order", async (req, res) => {
//   const limit = parseInt(req.query.limit) || 10; // Limite de livros por página (padrão: 10)
//   let page = req.query.page || 1; // Página atual (padrão: 1)
//   const order = req.query.order === "asc" ? 1 : -1; // Ordem de classificação (asc ou desc)
//     const totalBooks = await db.collection('books').countDocuments();
// const totalPages = Math.ceil(totalBooks / limit);



//   try {

//     if(page > totalPages){   
//       page = totalPages;
//     }
//     // Agregação para calcular total de reviews e ordenar
//     const books = await db.collection('users').aggregate([
//       { $unwind: "$reviews" },
//       {
//         $group: {
//           _id: "$reviews.book_id",
//           totalReviews: { $sum: 1 }, // Soma o número total de reviews por livro
//           reviews: { $push: "$reviews" }
//         }
//       },
//       { $sort: { totalReviews: order } }, // Ordena pelo total de reviews
//       { $skip: (page - 1) * limit }, // Ignora os documentos das páginas anteriores
//       { $limit: limit } // Limita o número de documentos retornados
//     ]).toArray();

//     // Extrair IDs de livros e buscar detalhes completos
//     const bookIds = books.map(book => book._id);
//     const bookDetails = await db.collection('books').find({ _id: { $in: bookIds } }).toArray();

//     // Mesclar detalhes do livro com informações agregadas
//     const booksWithDetails = books.map(book => {
//       const details = bookDetails.find(b => b._id === book._id) || {};
//       return {
//         ...details,
//         totalReviews: book.totalReviews,
//         reviews: book.reviews
//       };
//     });


//     // Responder com os dados e informações de paginação
//     const response = {
//       pagination: {
//         currentPage: page,
//         totalPages: totalPages,
//         booksPerPage: limit,
//         order: req.query.order || "desc"
//       },
//       books: booksWithDetails
//     };

//     res.status(200).send(response);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Erro na procura de livros");
//   }
// });



//Ponto 13 (Verificado)
//http://localhost:3000/books/star?limit=5&page=2
// router.get('/star', async (req, res) => {
//   const limit = parseInt(req.query.limit) || 10; // Número de livros por página (padrão: 10)
//   let page = req.query.page || 1; // Página atual (padrão: 1)

//   const totalBooks = await db.collection('books').countDocuments();
//   const totalPages = Math.ceil(totalBooks / limit);

//   try {
//     // Agrupar os livros pelo número de reviews com score igual a 5 e ordenar por contagem
//     const fiveStarBooks = await db.collection('users').aggregate([
//       { $unwind: "$reviews" },
//       { $match: { "reviews.score": 5 } }, // Filtra apenas as avaliações com score igual a 5
//       {
//         $group: {
//           _id: "$reviews.book_id",
//           fiveStarCount: { $sum: 1 } // Conta o número de avaliações com 5 estrelas para cada livro
//         }
//       },
//       { $sort: { fiveStarCount: -1 } }, // Ordena pela contagem de 5 estrelas em ordem decrescente
//       { $skip: (page - 1) * limit }, // Ignora os documentos das páginas anteriores
//       { $limit: limit } // Limita o número de livros retornados por página
//     ]).toArray();

//     // Extrair os IDs dos livros para buscar informações completas
//     const bookIds = fiveStarBooks.map(book => book._id);

//     // Buscar os detalhes dos livros na coleção "books" com base nos IDs
//     const books = await db.collection('books').find({ _id: { $in: bookIds } }).toArray();

//     // Adicionar a contagem de reviews de 5 estrelas a cada livro
//     const booksWithFiveStarCount = books.map(book => {
//       const fiveStarInfo = fiveStarBooks.find(b => b._id === book._id);
//       return {
//         ...book,
//         fiveStarCount: fiveStarInfo ? fiveStarInfo.fiveStarCount : 0
//       };
//     });

//     if (page > totalPages) {
//       page = totalPages;
//     }

//     // Estruturar a resposta com paginação
//     const response = {
//       pagination: {
//         currentPage: page,
//         totalPages: totalPages,
//         booksPerPage: limit,
//       },
//       books: booksWithFiveStarCount
//     };

//     res.status(200).send(response);
//   } catch (error) {

//     res.status(500).send("Erro na procura de livros com mais avaliações de 5 estrelas");
//   }
// });


// Ponto 14 (Verificado)
// router.get('/:year', async (req, res) => {
//   const year = parseInt(req.params.year);
//   const limit = parseInt(req.query.limit) || 10; // Número de livros por página (padrão: 10)
//   let page = req.query.page || 1; // Página atual (padrão: 1)




//   if (isNaN(year)) {
//     return res.status(400).send('Ano inválido.');
//   }

//   try {


//     // Buscar usuários com avaliações
//     const users = await db.collection('users').find({
//       reviews: {
//         $elemMatch: {
//           review_date: { $exists: true },
//         },
//       },
//     }).toArray();

//     // Filtrar avaliações do ano especificado e obter os IDs dos livros
//     const bookIds = new Set();
//     users.forEach(user => {
//       user.reviews.forEach(review => {
//         const reviewYear = new Date(parseInt(review.review_date)).getFullYear();
//         if (reviewYear === year) {
//           bookIds.add(review.book_id);
//         }
//       });
//     });
//     //Definir a página
//     const bookIdArray = Array.from(bookIds);
//     const totalPages = Math.ceil(bookIdArray.length / limit);
//     console.log(page)
//     if (page > totalPages) {
//       page = totalPages;
//     }

//     // Aplicar paginação
//     const paginatedBookIds = bookIdArray.slice((page - 1) * limit, page * limit);

//     // Buscar os detalhes dos livros com os IDs paginados
//     const books = await db.collection('books').find({ _id: { $in: paginatedBookIds } }).toArray();

//     // Estruturar a resposta com paginação
//     const response = {
//       pagination: {
//         currentPage: page,
//         booksPerPage: limit,
//         totalBooks: bookIdArray.length,
//         totalPages: totalPages,
//       },
//       books
//     };

//     res.json(response);
//   } catch (error) {
//     res.status(500).send('Erro ao buscar livros avaliados.');
//   }
// });


//Ponto 15 (Verificado)

// router.get("/comments", async (req, res) => {

//   const limit = 10;
//   let page = req.query.page || 1;
//   const skip = (page - 1) * limit;


//   const totalBooks = await db.collection('books').countDocuments();
//   const totalPages = Math.ceil(totalBooks / limit);

//   const result = await db.collection("books").aggregate([
//     {

//       $lookup: {

//         from: "comments",
//         localField: "_id",
//         foreignField: "book_id",
//         as: "comments"
//       }

//     },

//     {
//       $match: { "comments": { $ne: [] } },

//     },

//     {
//       $addFields: {
//         totalcomments: { $size: "$comments" }
//       }
//     },

//     { $sort: { totalcomments: -1 } },

//     { $skip: skip },
//     { $limit: limit }

//   ]

//   ).toArray()
//   if (page > totalPages) {
//     page = totalPages
//   }

//   const response = {
//     pagination: {
//       currentPage: page,
//       totalPages: totalPages,
//       booksPerPage: limit,

//     },result
//   }
//   res.status(200).send(response);
// });

//Ponto 16 (Verificado)
//http://localhost:3000/books/job?page=1

// router.get("/job", async (req, res) => {
//   const limit = parseInt(req.query.limit) || 10; // Limite de resultados por página (padrão: 10)
//   let page = req.query.page || 1; // Página atual (padrão: 1)
//   const skip = (page - 1) * limit; // Calcular o número de resultados a ignorar
//   const totalBooks = await db.collection('books').countDocuments();
//   const totalPages = Math.ceil(totalBooks / limit);

//   try {
//     let reviewsByJob = await db.collection("users").aggregate([
//       {
//         $unwind: "$reviews" // Desconstrói o array de reviews para processar individualmente cada um
//       },
//       {
//         $group: {
//           _id: "$job", // Agrupar por "job" do utilizador
//           totalReviews: { $sum: 1 } // Contar o nº total de reviews para cada "job"
//         }
//       },
//       { $sort: { totalReviews: -1 } }, // Ordena por número total de reviews (descendente)
//       { $skip: skip }, // Ignorar resultados das páginas anteriores
//       { $limit: limit } // Limitar o número de resultados retornados
//     ]).toArray();

//     if (page > totalPages) {
//       page = totalPages
//     }

//     const result = {

//       pagination: {
//         currentPage: page,
//         totalPages: totalPages,
//       }
//       , reviewsByJob
//     }

//     res.status(200).send(result);
//   } catch (erro) {
//     console.error("Erro ao buscar número total de reviews por 'job':", erro);
//     res.status(500).send({ message: "Erro", error: erro.message });
//   }
// });

//Ponto 17 (Verificado)
// http://localhost:3000/books/16-30/null/David A. Black?limit=5&page=1

// router.get('/:price?/:category?/:author?', async (req, res) => {
//   const limit = parseInt(req.query.limit) || 10; // Limite de resultados por página (padrão: 10)
//   const page = parseInt(req.query.page) || 1; // Página atual (padrão: 1)
//   const skip = (page - 1) * limit; // Calcular o número de resultados a ignorar

//   try {
//     // Extrair os parâmetros da requisição
//     const { price, category, author } = req.params;
//     let filter = {}; // Inicializa o objeto de filtro

//     // Adiciona filtros dinamicamente com base nos parâmetros fornecidos
//     if (price !== 'null') {
//       if (price.includes('-')) {
//         const [min, max] = price.split('-').map(Number);
//         filter.price = { $gte: min, $lte: max };
//       } else {
//         filter.price = Number(price);
//       }
//     }
//     if (category !== 'null') {
//       filter['categories'] = category; // Filtra pela categoria do livro
//     }
//     if (author !== 'null') {
//       filter['authors'] = author; // Filtra pelo autor do livro
//     }

//     // Busca os livros na coleção com base nos filtros, com paginação
//     let books = await db.collection('books')
//       .find(filter)
//       .skip(skip) // Adiciona a paginação
//       .limit(limit) // Limita o número de resultados por página
//       .toArray();

//     res.status(200).json(books); // Envia a lista de livros filtrados
//   } catch (e) {
//     // Tratamento de erro caso ocorra algum problema na busca
//     res.status(500).send({ message: 'Erro ao filtrar livros', error: e.message });
//   }
// });

//Ponto 20.1

// router.post("/:id/addBookToLibrary", async (req, res) => {
//   const bookId = parseInt(req.params.id);
//   const libraryId = req.body;

//   try {
//     const trueId1 = await db.collection('books').findOne({ _id: bookId });
//     const trueId2 = await db.collection('livrarias').findOne({ _id: libraryId._id });
//     if (!trueId1 || !trueId2) {
//       return res.status(404).send({ message: "Parâmetro introduzido inválido" })
//     }
//     const addBookToLibrary = await db.collection('livrarias').findOneAndUpdate(
//       { _id: libraryId._id },
//       { $addToSet: { book_ids: bookId } }
//     )
//     res.status(200).send({ message: "Livro adicionado à livraria com sucesso" })
//   } catch (error) {
//     res.status(500).send({ message: "Erro ao adicionar o Livro" });
//   }
// });






export default router;
