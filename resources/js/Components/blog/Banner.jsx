import estilo from './Banner.module.scss';

export default function Banner({light}){
    return (
        <section className={light ? estilo.bannerLight : estilo.bannerDark}>
            <div>
                <img src="./example/image.png" alt="Banner"/>
                <div>
                    <div>
                        <div>
                            <h2>Tecnologia</h2>
                        </div>
                        <div>
                            <p>The Impact of Technology on the Workplace: How Technology is Changing</p>
                        </div>
                        <div>
                            <div>
                                <img src="./example/profile.png" alt="Perfil"/>
                                <span>Jason Francisco</span>
                            </div>
                            <span>August 20, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
