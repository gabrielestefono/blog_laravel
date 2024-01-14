import BannerAutor from "@/Components/autor/bannerAutor";
import Ads from "@/Components/blog/Ads";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";

export default function Autor(props){
    return (
        <Layout>
            <BannerAutor/>
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
