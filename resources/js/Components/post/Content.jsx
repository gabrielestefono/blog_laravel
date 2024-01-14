import estilo from './Content.module.scss';
import propTypes from 'prop-types';

export default function Content({light, post}){
    Content.propTypes = {
        post: propTypes.object,
        light: propTypes.bool
    };
    return (
        <div className={light ? estilo.contentLight : estilo.contentDark}>
            <div>
                <div dangerouslySetInnerHTML={{ __html: post.corpo }} />
            </div>
        </div>
    )
}
