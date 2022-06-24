import "./home.scss";


import { listarTodosAnimes} from '../../api/animeApi';
import { useState, useEffect} from "react";

import { Link } from "react-router-dom";

export default function Index(){
    const [anime, setAnime] = useState([]);

    async function carregarTodosAnimes() {
        const resp = await listarTodosAnimes();
        console.log(resp);
        setAnime(resp);
    }

    useEffect(() =>{
        carregarTodosAnimes();
        }, [])


    return(
        <main className="pagina-1">
            <section className="p1-home">
            <div className="p1-sup">
                <h1> Seja Bem-Vindo(a) ao</h1>
                <h1>Animes.Com</h1>
               
                <a href="/cadastrarAnime"> cadastrar anime</a>
            </div>
            
            <div>
                <thead className="tabela">
                    <tr>
                        <th> NOME DO ANIME</th>
                    </tr>
                </thead>
            </div>
            
            </section>
            <div className="tabela2">
1
                {anime.map(item =>
                <tr className="tabela2">
                    <td  className="tabela2"><Link to="cadastrarAnime">{item.anime}</Link> </td>
                    <td>pokemon</td>
                </tr>
                )}
            </div>
        </main>
    )
}