import estilo from './Footer.module.scss';
import propTypes from 'prop-types';
import {useState, useEffect} from 'react';

export default function Footer({light}) {
    Footer.propTypes = {
        light: propTypes.bool
    };

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('/api/categorias')
            .then(response => response.json())
            .then(data => setCategorias(data));
    });
    return (
        <footer className={light ? estilo.footerLight : estilo.footerDark}>
            <div>
                <div>
                    <div>
                        <h3>Sobre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p><span>Email :</span>info@jstemplate.net</p>
                        <p><span>Phone :</span>880 123 456 789</p>
                    </div>
                    <div>
                        <div>
                            <h3>Links Rápidos</h3>
                            <ul>
                                <a href="/"><li>Início</li></a>
                                <a href="/sobre"><li>Sobre</li></a>
                                <a href="/blog"><li>Blog</li></a>
                            </ul>
                        </div>
                        <div>
                            <h3>Categorias</h3>
                            <ul>
                                {categorias.map((categoria, index) => (
                                    <a key={categoria.id} href={`/categoria?nome=${categoria.slug}`}><li>{categoria.nome}</li></a>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <h3>Noticias Semanais</h3>
                                <p>Receba nossas novidades por email</p>
                                <label>
                                    <input type="text" placeholder='Seu email'/>
                                    <div></div>
                                </label>
                                <button>Inscreva-se</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    )
}
