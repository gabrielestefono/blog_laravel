import estilo from './PageTitle.module.scss';

export default function PageTitle({light}) {
    return (
        <div className={light ? estilo.PageTitleLight : estilo.PageTitleDark}>
            <div>
                <h1>Blog</h1>
                <ul>
                    <a href="/"><li>Início</li></a>
                    <li className={estilo.separate}></li>
                    <a href="/"><li>Link um</li></a>
                </ul>
            </div>
        </div>
    )
}
