import { useState } from "react"
import {Link} from 'react-router-dom'


let Header = () => {
    
    return (
        <>

            <header>
                <nav class="col-whi">
                    <img width="140px " src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" alt="" />

                    <div>
                    
                    <ul className="nav-links">
                        <li className="nav-item"> <Link  to="/">Home</Link> </li>
                        {/* <li className="nav-item">Food</li> */}
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                        

                        
                        
                    </div>
                    


                </nav>
            </header>


        </>

    )
}
export default Header;
