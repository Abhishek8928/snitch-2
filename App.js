import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
// Named import
import Header from "./src/Component/Header.js";
import Body from "./src/Component/Body.js";
import Footer from "./src/Component/Footer.js";
import Instamart from './src/Component/Instamart'
// import About from "./src/Component/About.js";
import Error from "./src/Component/Error.js";
import Contact from "./src/Component/Contact.js";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Resturanatcard from "./src/Component/Resturanatcard.js";
import Restlist from "./src/Component/Restlist.js";
import Undermaintainces from "./src/Component/Undermaintainces.js";
import Shimmerlist from "./src/Component/Shimmerlist.js";

// i have to make compoent to be childeren of applayot

// we have to chunking your code

let About = lazy(() =>  import("./src/Component/About"))
let Applayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}

let appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element:<Suspense fallback={<Shimmerlist />}> <About/> </Suspense>
            },
            {
                path: "/Contact",
                element: <Undermaintainces/>,
                errorElement: <Error />
            }, {
                path: "/",
           element: <Body />,
        errorElement: <Error />
            },
            {
                path: "/restaurant/:id",
                element: <Restlist />,
            },
            {
                path: "/Instamart",
                element: <Instamart />,
            }
        ]
    }

])

// but writing and creating a big structure will make your code messy
// here the come jsx in pictude
// jsx is javascript xml
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider  router={appRoutes} />)

