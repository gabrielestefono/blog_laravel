import PostGridCard from './PostGridCard';
import estilo from './UltimasPostagens.module.scss';

export default function UltimasPostagens({light}){
    const currentPath = window.location.pathname;
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
                    {currentPath !== "/" ? <a href="/rotaRequisiçãoMais"><button>Ver Mais</button></a> : <a href="/blog"><button>Ver Todos</button></a>}
                </div>
            </div>
        </section>
    )
}
