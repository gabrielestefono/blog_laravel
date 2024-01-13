import estilo from './HeaderPost.module.scss';

export default function HeaderPost({light}){
    return (
        <div className={light ? estilo.HeaderPostLight : estilo.HeaderPostDark}>
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
    )
}
