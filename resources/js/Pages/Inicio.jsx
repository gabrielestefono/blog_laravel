import Ads from "@/Components/blog/Ads";
import Banner from "@/Components/blog/Banner";
import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";
import { Layout } from "@/Layouts/Layout";

export default function Inicio(){
    return (
        <Layout>
            <Banner/>
            <Ads/>
            <UltimasPostagens/>
            <Ads/>
        </Layout>
    )
}
