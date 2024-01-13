import { useState } from 'react';

import estilo from './Header.module.scss';

export default function Header(){
    const [light, setLight] = useState(true);

    function lightMode(){
        setLight(!light);
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
                    <a href="blog"><li>Blog</li></a>
                    <a href="postagem"><li>Postagem</li></a>
                    <a href="paginas"><li>Páginas</li></a>
                    <a href="contato"><li>Contato</li></a>
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
