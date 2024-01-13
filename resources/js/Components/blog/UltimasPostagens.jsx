import PostGridCard from './PostGridCard';
import estilo from './UltimasPostagens.module.scss';

export default function UltimasPostagens({light}){
    return (
        <section className={light ? estilo.ultimasPostagensLight : estilo.ultimasPostagensDark}>
            <div>
                <div>
                    <h1>Últimas postagens</h1>
                </div>
                <div>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                    <PostGridCard light={light}/>
                </div>
                <div>
                    <button>Ver mais</button>
                </div>
            </div>
        </section>
    )
}
