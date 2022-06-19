import { buscarHeroi } from "../repository/heroirepository";

Server.get('/heroi/buscar',async(req,resp) =>{
     try{
         const {nome} = req.query;
         const resposta = await buscarHeroi(nome);
         if(!resposta)
         resp.status(404).send([])
         else
         resp.send(resposta);
     } catch(err){
         resp.status(400).send({
             erro:err.message
         })
     }

}) 




export default Server;