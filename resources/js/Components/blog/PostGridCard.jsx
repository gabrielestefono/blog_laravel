import estilo from './PostGridCard.module.scss';

export default function PostGridCard() {
    return (
        <div className={estilo.postGridCardLight}>
            <div>
                <div>
                    <img src="./example/postImage.png" alt="Alt imagem" />
                </div>
                <div>
                    <h3>Technology</h3>
                </div>
                <div>
                    <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                </div>
                <div>
                    <div>
                        <img src="./example/profile.png" alt="Alt imagem" />
                        <span>Tracey Wilson</span>
                    </div>
                    <span>August 20, 2022</span>
                </div>
            </div>
        </div>
    )
}
