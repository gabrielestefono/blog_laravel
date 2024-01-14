import estilo from './BannerBlog.module.scss';
import propTypes from 'prop-types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function BannerBlog({light, post}) {
    BannerBlog.propTypes = {
        light: propTypes.bool,
    }
    if(post !== undefined){
        BannerBlog.propTypes = {
            post: propTypes.object
        }
        return (
            <div className={light ? estilo.BannerBlogLight : estilo.BannerBlogDark}>
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
            </div>
        )
    }else{
        return (
            <>
            </>
        )
    }
}
