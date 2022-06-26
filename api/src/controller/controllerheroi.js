import { buscarHeroi,listarTodosHerois } from '../repository/heroirepository.js'
import { Router } from "express";
const server = Router();

server.get('/heroi/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarHeroi(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/herois', async (req, resp) => {
    try {
        const resposta = await listarTodosHerois();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;
