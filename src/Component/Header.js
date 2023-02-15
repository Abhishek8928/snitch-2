import { useState } from "react"


const User = () => {
    return true;
}

let Header = () => {
    
    return (
        <>

            <header>
                <nav class="col-whi">
                    <img width="140px " src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" alt="" />

                    <div>
                    
                    <label class="switch">
                        <input type="checkbox" />
    <span class="slider"></span>
                        </label>
                        

                        
                        
                    </div>
                    


                </nav>
            </header>

            <Carousel />

        </>

    )
}
let Carousel = () => {
    return (
        <>
            <div className="car-flex">
                <img width="240px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" />

                <img width="240px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo" alt="" />
                <img width="240px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" alt="" />

                <img width="240px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" alt="" />
            </div>
        </>
    )
} 
export default Header;
