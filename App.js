import React from "react";
import ReactDOM from "react-dom/client";
// Named import
import Header from "./src/Component/Header.js";
import Body from "./src/Component/Body.js";
import Footer from "./src/Component/Footer.js";




let Applayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )

}

// but writing and creating a big structure will make your code messy
// here the come jsx in pictude
// jsx is javascript xml
ReactDOM.createRoot(document.getElementById("root")).render(<Applayout />)

