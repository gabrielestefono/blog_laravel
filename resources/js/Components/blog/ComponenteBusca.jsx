import PostGridCard from './PostGridCard';
import estilo from './ComponenteBusca.module.scss';
import PropTypes from 'prop-types';

export default function ComponenteBusca({light, posts}){
    // Validando os tipos das props
    ComponenteBusca.propTypes = {
        light: PropTypes.bool,
        posts: PropTypes.array
    }

    const currentPath = window.location.pathname;

    let postsProntos = (posts)=>{
        return posts.map((post, index) => {
            return (
                <PostGridCard key={post.id} post={post} light={light}/>
            )
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
    return (
        <section className={light ? estilo.ComponenteBuscaLight : estilo.ComponenteBuscaDark}>
            <div>
                <div>
                    <h1>Resultado Busca</h1>
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
