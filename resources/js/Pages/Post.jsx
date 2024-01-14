import Ads from "@/Components/blog/Ads";
import PostInfo from "@/Components/post/PostInfo";
import { Layout } from "@/Layouts/Layout";
import propTypes from 'prop-types';

export default function Post(props){
    Post.propTypes = {
        post: propTypes.object
    };
    console.log(props);
    return (
        <Layout>
            <PostInfo post={props.post}/>
            <Ads/>
        </Layout>
    )
}
