import estilo from './HeaderPost.module.scss';
import propTypes from 'prop-types';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

export default function HeaderPost({light, post}){
    HeaderPost.propTypes = {
        post: propTypes.object,
        light: propTypes.bool
    };
    return (
        <div className={light ? estilo.HeaderPostLight : estilo.HeaderPostDark}>
            <div>
                <div>
                    <h2>{post.categoria}</h2>
                </div>
                <div>
                    <p>{post.titulo}</p>
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
    )
}
