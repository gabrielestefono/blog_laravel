import React from 'react';

import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";

export function Layout({children}){
    return(
        <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
        </>
    )
}
