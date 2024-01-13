import BannerAutor from "@/Components/autor/bannerAutor";
import Ads from "@/Components/blog/Ads";
import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import SlideShowBlog from "@/Components/blogpage/SlideShowBlog";

export default function Autor(){
    return (
        <Layout>
            <BannerAutor/>
            <UltimasPostagens/>
            <Ads/>
        </Layout>
    )
}
