import ComponenteBusca from "@/Components/blog/ComponenteBusca";
import { Layout } from "@/Layouts/Layout";
import propTypes from 'prop-types';

export default function Categoria(props){
    Categoria.propTypes = {
        posts: propTypes.array
    }
    return (
        <Layout>
            <ComponenteBusca posts={props.posts}/>
        </Layout>
    )
}
