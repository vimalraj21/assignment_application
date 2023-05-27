import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Util from "../js/Util/Util";
// import import_data from "../js/database/import_data";

import Home_desktop_view from "./Home_page/Home_desktop_view";
import Home_mobile_view from "./Home_page/Home_mobile_view";
import { Container } from "@mui/material";
function Home() {
    const [ismobile, setIsmobile] = useState();


    useEffect(() => {
        // let data = import_data.dummy_data;
        // console.log(data);
        let ismobile_data = Util.isMobile();
        setIsmobile(ismobile_data)
        console.log('Running ismobile function--> ' + ismobile_data);
    }, []);


    return (
        <>
            <header>
                <Header />
            </header>
            <Container>
            {/* <Home_desktop_view/> */}
            {/* <Home_mobile_view/> */}
            {
                ismobile ?
                <Home_mobile_view/> : <Home_desktop_view/>

            }
            </Container>
        
            
            <footer>
                <Footer />
            </footer>

        </>
    );
}

export default Home;