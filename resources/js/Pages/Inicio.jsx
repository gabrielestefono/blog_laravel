import Ads from "@/Components/blog/Ads";
import Banner from "@/Components/blog/Banner";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";
import PropTypes from 'prop-types';

export default function Inicio(props){
    Inicio.propTypes = {
        posts: PropTypes.array.isRequired,
    };
    return (
        <Layout>
            <Banner post={props.posts[0]}/>
            <Ads/>
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
