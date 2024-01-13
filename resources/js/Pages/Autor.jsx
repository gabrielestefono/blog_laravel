import BannerAutor from "@/Components/autor/bannerAutor";
import Ads from "@/Components/blog/Ads";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";

export default function Autor(){
    return (
        <Layout>
            <BannerAutor/>
            <UltimasPostagens/>
            <Ads/>
        </Layout>
    )
}
