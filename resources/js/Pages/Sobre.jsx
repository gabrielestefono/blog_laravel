import BannerAutor from "@/Components/autor/bannerAutor";
import Ads from "@/Components/blog/Ads";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";
import propTypes from 'prop-types';

export default function Autor(props){
    Autor.propTypes = {
        users: propTypes.array,
        posts: propTypes.array
    };

    let user = () => {
        return props.users.map((user) => {
            return (
                <BannerAutor key={user.id} user={user}/>
            )
        })
    }
    return (
        <Layout>
            {user()}
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
