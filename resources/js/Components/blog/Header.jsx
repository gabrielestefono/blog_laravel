import estilo from './Header.module.scss';

import PropTypes from 'prop-types';

export default function Header({lightMode, light}){
    Header.propTypes = {
        light: PropTypes.bool.isRequired,
    };

    return (
        <div className={light ? estilo.lightHeader : estilo.darkHeader}>
            <div>
                <div>
                    <a href="/">
                        <img src={light ? './icons/logo/logoLight.svg' : './icons/logo/logoDark.svg'} alt=""/>
                    </a>
                </div>
                <ul>
                    <a href="/"><li>Início</li></a>
                    <a href="/blog"><li>Blog</li></a>
                    <a href="/sobre"><li>Sobre</li></a>
                </ul>
                <div>
                    <div>
                        <input type="text" name="pesquisar" id="pesquisa" placeholder='Pesquisar'/>
                        <div className={estilo.lupa}></div>
                    </div>
                    <button className={light ? estilo.light : estilo.dark} onClick={lightMode}>
                        <div>
                            <div></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
