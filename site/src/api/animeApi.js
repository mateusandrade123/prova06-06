import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAnime(anime) {
    const resposta = await api.post('/inserirAnime', {
        anime: anime
    })
    return resposta.data;
}

export async function listarTodosAnimes() {
    const resposta = await api.get('/todosAnimes');
    return resposta.data;
} 