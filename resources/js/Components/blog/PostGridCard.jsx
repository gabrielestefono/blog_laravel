import estilo from './PostGridCard.module.scss';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import propTypes from 'prop-types';

export default function PostGridCard({light, post}) {
    PostGridCard.propTypes = {
        light: propTypes.bool.isRequired,
        post: propTypes.object.isRequired
    }
    return (
        <div className={light ? estilo.postGridCardLight : estilo.postGridCardDark}>
            <div>
                <div>
                    <img src={`./storage/${post.imagem_pequena}`} alt="Alt imagem" />
                </div>
                <div>
                    <h3>{post.categoria}</h3>
                </div>
                <div>
                    <a href={`/post?id=${post.id}`}><h2>{post.titulo}</h2></a>
                </div>
                <div>
                    <div>
                        <img src={post.user.imagem_pequena != undefined ? `./storage/${post.user.imagem_pequena}` : "./example/profile.png"} alt="Alt imagem" />
                        {/* <span>{post.user.name}</span> */}
                    </div>
                    <span>{format(new Date(post.data), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</span>
                </div>
            </div>
        </div>
    )
}
