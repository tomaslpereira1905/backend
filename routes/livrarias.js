import express from "express";
import db from "../db/config.js";

const router = express.Router();


//Ponto 20.2

// router.get("/:id", async(req, res) => {
//     try{
//     let libraryId = parseInt(req.params.id);
//     let library = await db.collection('livrarias').findOne({_id: libraryId});
//     if(!library){
//         return res.status(404).send({message: "Livraria não encontrada"});
//     }
    
//     if(library.book_ids == null){
//         return res.status(404).send({message: "A Livraria não tem nenhum livro associado"});
//     }
//     res.status(200).send(library.book_ids);
//     }catch(error){
//         res.status(500).send({message: "Erro ao procurar a Livraria"});
//     } 
// });


//Ponto 20.3

// router.get('/within', async (req, res) => {
//     try {
//       const { longitude, latitude, radius } = req.query;
  
//       if (!longitude || !latitude || !radius) {
//         return res.status(400).send('Longitude, latitude e raio são necessários.');
//       }
  
//       const radiusInRadians = parseFloat(radius) / 6378100;
  //Converte o raio fornecido em radianos, por isso é necessário dividir pelo raio da terra em metros
//       const livrarias = await db.collection('livrarias').find({
//         "geometry.coordinates": {
//           $geoWithin: {
//             $centerSphere: [[parseFloat(longitude), parseFloat(latitude)], radiusInRadians]
//           }
//         }
//       }).toArray();
  
//       res.status(200).json(livrarias);
//     } catch (error) {
//       console.error("Erro ao buscar livrarias dentro do raio:", error);
//       res.status(500).send('Erro ao buscar livrarias dentro do raio');
//     }


//Ponto 20.3 (Verificado)

// router.get('/within', async (req, res) => {
//     try {
//       const { longitude, latitude, radius } = req.query;
  
//       if (!longitude || !latitude || !radius) {
//         return res.status(400).send('Longitude, latitude e radius são necessários.');
//       }
  
//       const radiusInRadians = parseFloat(radius) / 6378100;
//   //Converte o raio fornecido em radianos, por isso é necessário dividir pelo raio da terra em metros
//       const livrarias = await db.collection('livrarias').find({
//         "geometry.coordinates": {
//           $geoWithin: {
//             $centerSphere: [[parseFloat(longitude), parseFloat(latitude)], radiusInRadians]
//           }
//         }
//       }).toArray();
  
//       res.status(200).json(livrarias);
//     } catch (error) {
     
//       res.status(500).send('Erro na procura de livrarias dentro do raio');
//     }
//   });


//Ponto 20.5

// router.get("/count-near" , async (req, res) => {

//     try{

//     const latitude = parseFloat(req.query.lat);
//     const longitude = parseFloat(req.query.long);
//     const raio = parseInt(req.query.raio);

//     const result = await db.collection("livrarias").find(

//         {
//             geometry:{
//                 $near:{
//                     $geometry:{
//                         type:"Point",
//                         coordinates:[longitude, latitude],
//                     },
//                     $minDistance:0,
//                     $maxDistance:raio
//                 }

//             }
//         }



// ).toArray();

// const num_livrarias = result.length;


// res.status(200).json({

//     num_livrarias,
//     result
// })

//     }catch(error){
//         res.status(500).json({message: "Erro ao procurar livrarias!"})
//     }


// })




//Ponto 20.6


// router.get("/loc-feira-do-livro", async(req, res) => {

//     try{
//         const longitude_user = parseFloat (req.query.long);
//         const latitude_user = parseFloat (req.query.lat);
    
    
//         const result = await db.collection("livrarias").findOne({
    
//             name: "Feira do Livro",
//             geometry:{
//                 $geoIntersects:{
//                     $geometry:{
//                         type: "Point",
//                         coordinates: [longitude_user, latitude_user ]
//                     }
//                 }
//             }
//         });
    
//         if(result) {
    
//             res.status(200).json({message: "User está na feira do livro!"})
//         } else{
//             res.status(404).json({message: "User não está na feira do livro!"})
//         }
//     }catch(error){
    
//         res.status(500).json({message: "Erro!"})
    
    
//     }
    
    
//     })
    




//FIM
















    


export default router;
