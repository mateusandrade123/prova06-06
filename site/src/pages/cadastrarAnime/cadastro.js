import './cadastro.scss';
import { useState } from 'react';

import { cadastrarAnime } from '../../api/animeApi';

export default function Cadastrar(){

    const[anime, setAnime] = useState('');

    async function salvarClick() {
        try {
          const r =await cadastrarAnime(anime)
          ;  

          alert('Seu anime foi cadastrado!!');
         
        } catch (err) {
            alert(err.message);
        }
        
       
    }

    return(
        <main className="pagina-1">
            <section className="p1-home">
            <div className="form">
                <h1> Cadastre seu anime</h1>
            
            </div>
            <div>

            </div>
            </section>
            <main>
            <input type='text' placeholder='Nome do Anime' value={anime} onChange={e => setAnime(e.target.value)} />
            <div>
                <button onClick={salvarClick}>Salvar</button>
            </div>
        </main>
        </main>
        
        
    )
}