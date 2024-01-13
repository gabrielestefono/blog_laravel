import estilo from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={estilo.footerLight}>
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
                            <h3>Quick Link</h3>
                            <ul>
                                <a href="/"><li>Início</li></a>
                                <a href="/"><li>About</li></a>
                                <a href="/"><li>Blog</li></a>
                                <a href="/"><li>Arquived</li></a>
                                <a href="/"><li>Author</li></a>
                                <a href="/"><li>Contact</li></a>
                            </ul>
                        </div>
                        <div>
                            <h3>Category</h3>
                            <ul>
                                <a href="/"><li>Lifestyle</li></a>
                                <a href="/"><li>Technology</li></a>
                                <a href="/"><li>Travel</li></a>
                                <a href="/"><li>Business</li></a>
                                <a href="/"><li>Economy</li></a>
                                <a href="/"><li>Sports</li></a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <h3>Weekly Newsletter</h3>
                                <p>Get blog articles and offers via email</p>
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
