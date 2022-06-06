import { con } from '.connection.js'

export function Anime(anime,nomeAnime) {
    const comando=
    `select ID_ANIME      id,
    NM_ANIME        nome
    FROM TB_ANIME
    WHERE ID_ANIME  = '1'
    AND NM_ANIME = 'Naruto'`

}