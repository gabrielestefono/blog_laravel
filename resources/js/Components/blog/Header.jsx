import estilo from './Header.module.scss';

import PropTypes from 'prop-types';

export default function Header({lightMode, light}){
    Header.propTypes = {
        light: PropTypes.bool.isRequired,
        lightMode: PropTypes.func.isRequired
    };

    let redirecionar = (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        if (titulo) {
            window.location.href = `/busca?titulo=${encodeURIComponent(titulo)}`;
        }
    }

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
                <form>
                    <div>
                        <input type="text" name="titulo" id="titulo" placeholder='Pesquisar'/>
                        <button className={estilo.lupa} onClick={redirecionar}></button>
                    </div>
                    <button className={light ? estilo.light : estilo.dark} onClick={lightMode}>
                        <div>
                            <div></div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}
