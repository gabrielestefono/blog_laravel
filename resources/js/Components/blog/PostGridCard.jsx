import estilo from './PostGridCard.module.scss';

export default function PostGridCard({light, post}) {
    return (
        <div className={light ? estilo.postGridCardLight : estilo.postGridCardDark}>
            <div>
                <div>
                    <img src={`./storage/${post.imagem_pequena}`} alt="Alt imagem" />
                </div>
                <div>
                    <h3>{post.categoria}</h3>
                </div>
                <div>
                    <a href={`/post?id=${post.id}`}><h2>{post.titulo}</h2></a>
                </div>
                <div>
                    <div>
                        <img src="./example/profile.png" alt="Alt imagem" />
                        <span>{post.user.name}</span>
                    </div>
                    <span>{post.data}</span>
                </div>
            </div>
        </div>
    )
}
