
import { inserirAnime, listarTodosAnimes } from  '../repository/animeRepository.js'

import { Router } from 'express'

const server = Router();

server.post('/anime', async (req, resp) => {
    try {
        const novoAnime = req.body;

        const anime = await inserirAnime(novoAnime);

        resp.send(anime);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/animes', async (req, resp) => {
    try {
        const resposta = await listarTodosAnimes();
        resp.send(resposta);

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;