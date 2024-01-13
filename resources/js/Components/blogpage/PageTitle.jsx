import estilo from './PageTitle.module.scss';

export default function PageTitle({light}) {
    return (
        <div className={light ? estilo.PageTitleLight : estilo.PageTitleDark}>
            <div>
                <h1>Blog</h1>
            </div>
        </div>
    )
}
