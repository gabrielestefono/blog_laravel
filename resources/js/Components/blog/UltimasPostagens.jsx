import PostGridCard from './PostGridCard';
import estilo from './UltimasPostagens.module.scss';

export default function UltimasPostagens({light, posts}){
    let postsProntos = (posts)=>{
        return posts.map((post, index) => {
            if(currentPath !== '/autor'){
                if(index !== 0){
                    return (
                        <PostGridCard key={post.id} post={post} light={light}/>
                    )
                }
            }else{
                return (
                    <PostGridCard key={post.id} post={post} light={light}/>
                )
            }
        })
    }
    const currentPath = window.location.pathname;
    return (
        <section className={light ? estilo.ultimasPostagensLight : estilo.ultimasPostagensDark}>
            <div>
                <div>
                    <h1>Últimas postagens</h1>
                </div>
                <div>
                    {postsProntos(posts)}
                </div>
                <div>
                    {currentPath !== "/" ? <a href="/rotaRequisiçãoMais"><button>Ver Mais</button></a> : <a href="/blog"><button>Ver Todos</button></a>}
                </div>
            </div>
        </section>
    )
}
