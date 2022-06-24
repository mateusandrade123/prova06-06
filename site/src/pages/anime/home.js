import "./home.scss";

import { listarTodosAnimes} from '../../api/animeApi'
import { useState } from "react";
import { useEffect } from 'react'

export default function Index(){
    const [anime, setAnimes] = useState([]);

    async function carregarTodosAnimes() {
        const resp = await listarTodosAnimes();
        console.log(resp);
        setAnimes(resp);
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

                {anime.map(item =>
                <tr className="tabela2">
                    <td  className="tabela2">{item.anime} </td>
                    <td  className="tabela2">mateus </td>
                </tr>
                )}
            </div>
        </main>
    )
}