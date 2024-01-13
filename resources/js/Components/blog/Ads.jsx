import estilo from './Ads.module.scss';

export default function Ads({light}) {
    return (
        <div className={light ? estilo.asdLight : estilo.asdDark}>
            <div>ADS AQUI 750 X 100</div>
        </div>
    )
}
