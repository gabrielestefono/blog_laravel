import estilo from './Banner.module.scss';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Banner({light, post}){
    Banner.propTypes = {
        light: PropTypes.bool,
    };
    console.log(post);
    if(post != undefined){
        Banner.propTypes = {
            post: PropTypes.object.isRequired,
        };
        return (
            <section className={light ? estilo.bannerLight : estilo.bannerDark}>
                <div>
                     <img src={`./storage/${post.imagem_destaque}`} alt="Banner"/>
                    <div>
                        <div>
                            <div>
                                <h2>{post.categoria.nome}</h2>
                            </div>
                           <div>
                                <a href={`/post?id=${post.id}`}><p>{post.titulo}</p></a>
                            </div>
                            <div>
                                <div>
                                    <img src={post.user.imagem_pequena != undefined ? `./storage/${post.user.imagem_pequena}` : "./example/profile.png"} alt="Perfil"/>
                                    <a href={`/autor?id=${post.user.id}`}>{post.user.name}</a>
                                </div>
                                <span>{format(new Date(post.data), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</span>
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
