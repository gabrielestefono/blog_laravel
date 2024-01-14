import BannerAutor from "@/Components/autor/bannerAutor";
import Ads from "@/Components/blog/Ads";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";
import propTypes from 'prop-types';

export default function Autor(props){
    Autor.propTypes = {
        user: propTypes.array,
        posts: propTypes.array
    };
    return (
        <Layout>
            <BannerAutor key={props.user.id} user={props.user}/>
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
