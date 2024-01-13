import PostGridCard from './PostGridCard';
import estilo from './UltimasPostagens.module.scss';

export default function UltimasPostagens(){
    return (
        <section className={estilo.ultimasPostagensLight}>
            <div>
                <div>
                    <h1>Últimas postagens</h1>
                </div>
                <div>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                    <PostGridCard/>
                </div>
                <div>
                    <button>Ver mais</button>
                </div>
            </div>
        </section>
    )
}
