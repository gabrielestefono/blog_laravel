import Ads from "@/Components/blog/Ads";
import Banner from "@/Components/blog/Banner";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";

export default function Inicio(props){
    return (
        <Layout>
            <Banner post={props.posts[0]}/>
            <Ads/>
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
