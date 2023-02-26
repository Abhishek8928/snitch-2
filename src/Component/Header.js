import { useState } from "react"
import {Link} from 'react-router-dom'


let Header = () => {
    const [isValid , setIsvalid] = useState(false)
    return (
        <>

            <header>
                <nav class="col-whi show-shadow">
                    <img width="100px " src="https://www.zeptonow.com/images/logo.svg" alt="" />

                    <div>
                    
                    <ul className="nav-links">
                        <li className="nav-item"> <Link  to="/">Home</Link> </li>
                        {/* <li className="nav-item">Food</li> */}
                        <li className="nav-item"><Link to="/about">About</Link></li>
                            <li className="nav-item"><Link to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link to="/Instamart">Instamart</Link></li>
                        </ul>
                    </div>

                    <div>
                        {
                            isValid ? <button onClick={() => {
                                setIsvalid(false)
                            }} className="btn-login">Logout</button> :
                                
                            <button onClick={() => {
                                setIsvalid(true)
                            }}   className="btn-login">Login</button>
                             
                       }
                        </div>
                    


                </nav>
            </header>


        </>

    )
}
export default Header;
