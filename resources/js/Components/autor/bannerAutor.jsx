import estilo from './BannerAutor.module.scss';
import propTypes from 'prop-types';

export default function BannerAutor({light, user}) {
    BannerAutor.propTypes = {
        light: propTypes.bool,
        user: propTypes.object,
    };
    return (
        <div className={light ? estilo.bannerAutorLight : estilo.bannerAutorDark}>
            <div>
                <div>
                    <div>
                        <img src={user.imagem_grande != undefined ? `./storage/${user.imagem_grande}` : "./example/profilehd.png"}  alt="Imagem do autor"/>
                        <div>
                            <a href={`/autor?id=${user.id}`}><h2>{user.name}</h2></a>
                            <p>{user.profissao ?? 'Profissão não informada'}</p>
                        </div>
                    </div>
                    <div>
                        <p>{user.sobre ?? "Usuário sem bibliografia"}</p>
                    </div>
                    <div>
                        {user.facebook != undefined ? <a href={user.facebook}>
                            <div className={estilo.item1}></div>
                        </a> : ''}
                        {user.twitter != undefined ? <a href={user.twitter}>
                            <div className={estilo.item2}></div>
                        </a> : ''}
                        {user.instagram != undefined ? <a href={user.instagram}>
                            <div className={estilo.item3}></div>
                        </a> : ''}
                        {user.youtube != undefined ? <a href={user.youtube}>
                            <div className={estilo.item4}></div>
                        </a> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
