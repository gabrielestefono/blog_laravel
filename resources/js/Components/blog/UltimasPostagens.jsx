import PostGridCard from './PostGridCard';
import estilo from './UltimasPostagens.module.scss';
import PropTypes from 'prop-types';

export default function UltimasPostagens({light, posts}){
    // Validando os tipos das props
    UltimasPostagens.propTypes = {
        light: PropTypes.bool,
        posts: PropTypes.array
    }

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

    let mostrarBotao = ()=>{
        if(posts.length > 11){
            if(currentPath !== "/"){
                return (<a href="/rotaRequisiçãoMais"><button>Ver Mais</button></a>)
            }else{
                return (<a href="/blog"><button>Ver Todos</button></a>)
            }
        }
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
                    {mostrarBotao()}
                </div>
            </div>
        </section>
    )
}
