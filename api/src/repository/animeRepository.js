import { con } from "./connection.js";

export async function inserirAnime(anime) {
    const comando = 
    `insert into tb_Anime (id_anime,nm_animes)
        values(?,?)`
    const [resposta] = await con.query(comando, [anime.usuario, anime.anime]);
    anime.id = resposta.insertId;

    return anime;
}

export async function listarTodosAnimes(params) {
    const comando = 
    `
    select * from tb_Anime
    `
    
    const [linhas] = await con.query(comando);
    return linhas;
    }