import Ads from "@/Components/blog/Ads";
import Banner from "@/Components/blog/Banner";
import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";
import UltimasPostagens from "@/Components/blog/UltimasPostagens";

export default function Inicio(){
    return (
        <>
            <Header/>
            <Banner/>
            <Ads/>
            <UltimasPostagens/>
            <Ads/>
            <Footer/>
        </>
    )
}
