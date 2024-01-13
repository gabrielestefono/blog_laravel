import estilo from './PageTitle.module.scss';

export default function PageTitle(props) {
    return (
        <div className={estilo.PageTitleLight}>
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
