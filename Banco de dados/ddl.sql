export  async function Anime(anime, nomeAnime) {
    const comando=
    `select ID_ANIME      id,
    NM_ANIME        nome
    FROM TB_ANIME
    WHERE ID_ANIME  = ?
    AND NM_ANIME = ?`

    const resp = con.query(comando, [id, nome])
}

