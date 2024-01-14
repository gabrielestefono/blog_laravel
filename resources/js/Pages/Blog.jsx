import Ads from "@/Components/blog/Ads";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import SlideShowBlog from "@/Components/blogpage/SlideShowBlog";
import { Layout } from "@/Layouts/Layout";

export default function Blog(props){
    return (
        <Layout>
            <SlideShowBlog post={props.posts[0]}/>
            <UltimasPostagens posts={props.posts}/>
            <Ads/>
        </Layout>
    )
}
