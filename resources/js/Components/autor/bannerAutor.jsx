import estilo from './BannerAutor.module.scss';

export default function BannerAutor() {
    return (
        <div className={estilo.bannerAutorLight}>
            <div>
                <div>
                    <div>
                        <img src="./example/profilehd.png" alt="Profile"/>
                        <div>
                            <h2>Jonathan Doe</h2>
                            <p>Collaborator & Editor</p>
                        </div>
                    </div>
                    <div>
                        <p>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
                    </div>
                    <div>
                        <button>
                            <div className={estilo.item1}></div>
                        </button>
                        <button>
                            <div className={estilo.item2}></div>
                        </button>
                        <button>
                            <div className={estilo.item3}></div>
                        </button>
                        <button>
                            <div className={estilo.item4}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
