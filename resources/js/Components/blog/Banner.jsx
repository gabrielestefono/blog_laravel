import estilo from './Banner.module.scss';
import PropTypes from 'prop-types';


export default function Banner({light, post}){
    Banner.propTypes = {
        light: PropTypes.bool,
    };
    if(post != undefined){
        Banner.propTypes = {
            post: PropTypes.object.isRequired,
        };
        return (
            <section className={light ? estilo.bannerLight : estilo.bannerDark}>
                <div>
                    <img src={post.imagem_destaque != undefined ? `./storage/${post.imagem_destaque}` : ''} alt="Banner"/>
                    <div>
                        <div>
                            <div>
                                <h2>{post.categoria}</h2>
                            </div>
                            <div>
                                <a href={`/post?id=${post.id}`}><p>{post.titulo}</p></a>
                            </div>
                            <div>
                                <div>
                                    <img src={post.user.imagem_pequena ?? "./example/profile.png"} alt="Perfil"/>
                                    <span>{post.user.name}</span>
                                </div>
                                <span>{post.data}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
        return (
            <>
            </>
        )
    }
}
