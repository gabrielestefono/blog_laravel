import Ads from "@/Components/blog/Ads";
import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import SlideShowBlog from "@/Components/blogpage/SlideShowBlog";
import { Layout } from "@/Layouts/Layout";

export default function Blog(){
    return (
        <Layout>
            <SlideShowBlog/>
            <UltimasPostagens/>
            <Ads/>
        </Layout>
    )
}
