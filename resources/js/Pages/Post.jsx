import Ads from "@/Components/blog/Ads";
import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";
import PostInfo from "@/Components/post/PostInfo";
import { Layout } from "@/Layouts/Layout";

export default function Post(){
    return (
        <Layout>
            <PostInfo/>
            <Ads/>
        </Layout>
    )
}
