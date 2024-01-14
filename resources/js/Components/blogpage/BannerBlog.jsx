import estilo from './BannerBlog.module.scss';

export default function BannerBlog({light, post}) {
    return (
        <div className={light ? estilo.BannerBlogLight : estilo.BannerBlogDark}>
            <div>
                <img src={`./storage/${post.imagem_destaque}`} alt="Banner"/>
                <div>
                    <div>
                        <div>
                            <h2>{post.categoria}</h2>
                        </div>
                        <div>
                            <a href={`/post?id=${post.id}`}><p>{post.titulo}</p></a>
                        </div>
                        <div>
                            <div>
                                <img src="./example/profile.png" alt="Perfil"/>
                                <span>{post.user.name}</span>
                            </div>
                            <span>{post.data}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
