import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Footer from "@/Components/blog/Footer";
import Header from "@/Components/blog/Header";

export function Layout({ children }) {

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [light, setLight] = useState(true);

    useEffect(() => {
        if(!light){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    }, [light]);


    function lightMode() {
        setLight(!light);
    }

    const childrenWithLight = React.Children.map(children, child =>
        React.cloneElement(child, { light })
    );

    return (
        <>
            <Header lightMode={lightMode} light={light}/>
            <main>
                {childrenWithLight}
            </main>
            <Footer light={light}/>
        </>
    );
}
