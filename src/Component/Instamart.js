import '../../Instamart.css'
import { useState } from "react";
import cart from '../../Helper/cart.png'
import cart2 from '../../Helper/cart2.png'

function Feature({img_f,desc_f,title_f}) {
    return (<>
       
       <div className="card-fea">
           <div className="img-holder">
               
            <img width="100%" src={img_f} alt="" />
           </div>
            <h3 className='f-title mt-0 mb-0'>{title_f}</h3>
            <p className='f-desc mt-0'>{desc_f}</p>
        </div>
    </>
   )
}


function Section({ title, desc, isvisible, setVisible, outVisible }) {
    console.log(isvisible)
    return (
        <>
            <div className="container-instamart">



                {
                    isvisible ? <div className='flex-insta'>  <h1 className='insta-title mt-0 mb-0'>{title}</h1> <button className='insta-btn' onClick={() => {
                        outVisible()

                    }}><i class="bi bi-chevron-up ch-btn"></i></button>  </div>
                        :
                        <div className='flex-insta'>
                            <h1 className='insta-title mt-0'>{title}</h1>
                            <button className='insta-btn' onClick={() => {
                                setVisible()
                            }}><i class="bi bi-chevron-down ch-btn"></i></button> </div>
                }
                {isvisible && <p className='insta-desc mb-0'>{desc}</p>}


            </div>

        </>
    )
}


function Hero() {
    return (<>
        <div className='instamart-hero'>


            <div className='hero-first'>
                <h1 className='hero-title'>Emergency supplies

                    delivered in minutes,
                    from the house of Swiggy.</h1>

                <p className='hero-desc'>Open 6 AM to late night everyday</p>
                <button className="btn-swiggy">Try instamart on swiggy app</button>
            </div>
            <div className='hero-second'>

                <img width="100%" src={cart2} alt="" />
            </div>
        </div></>)
}
function Instamart() {
    let [isVisible, setVisible] = useState()

    return (
        <>

            <div className='main-class'>

                <Hero />



                <div className='features'>
                    <h2 className='intro-h2'>How it work</h2>
                    <div className='feature-flex'>

                    

                    <Feature img_f={"https://cdn.zeptonow.com/mweb-prod/images/pdp/place-order.svg"} title_f={"Place an order"} desc_f={"Choose from a wide range of daily essentials"} />

                    <Feature img_f={"https://cdn.zeptonow.com/mweb-prod/images/pdp/do-not-blink.svg"} title_f={"Don’t Blink"} desc_f={"Our delivery partner will be at your door"} />

                    
                    <Feature img_f={"https://cdn.zeptonow.com/mweb-prod/images/pdp/enjoy.svg"} title_f={"Enjoy"} desc_f={"Boom! You’ll never have to wait for groceries again"} />
                    </div>

                </div>

                <div className='wrap-all-content'>

                    <h2 style={{padding:"20px 4%",textAlign:"center"}} className='intro-h2'>Why People Loves us ?</h2>
                    <Section isvisible={isVisible === 'about'} setVisible={() => {
                        setVisible("about")
                    }} outVisible={() => {
                        setVisible("none")
                    }} title="About instamart" desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur impedit magni necessitatibus dicta quaerat rem ullam possimus. Nobis explicabo reiciendis molestiae voluptatibus sequi, rem beatae. Numquam sint, veniam, minima molestiae, voluptatum iusto animi deleniti impedit ab quod neque explicabo."} />


                    <Section outVisible={() => {
                        setVisible("none")
                    }} isvisible={isVisible === 'team'} setVisible={() => {
                        setVisible("team")
                    }} title="Team Member" desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur impedit magni necessitatibus dicta quaerat rem ullam possimus. Nobis explicabo reiciendis molestiae voluptatibus sequi, rem beatae. Numquam sint, veniam, minima molestiae, voluptatum iusto animi deleniti impedit ab quod neque explicabo."} />


                    <Section outVisible={() => {
                        setVisible("none")
                    }} isvisible={isVisible === 'product'} setVisible={() => {
                        setVisible("product")
                    }} title="Product" desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur impedit magni necessitatibus dicta quaerat rem ullam possimus. Nobis explicabo reiciendis molestiae voluptatibus sequi, rem beatae. Numquam sint, veniam, minima molestiae, voluptatum iusto animi deleniti impedit ab quod neque explicabo."} />


                    {/* <Section title="Contact" desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur impedit magni necessitatibus dicta quaerat rem ullam possimus. Nobis explicabo reiciendis molestiae voluptatibus sequi, rem beatae. Numquam sint, veniam, minima molestiae, voluptatum iusto animi deleniti impedit ab quod neque explicabo."} />

                <Section title="Career" desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur impedit magni necessitatibus dicta quaerat rem ullam possimus. Nobis explicabo reiciendis molestiae voluptatibus sequi, rem beatae. Numquam sint, veniam, minima molestiae, voluptatum iusto animi deleniti impedit ab quod neque explicabo."} /> */}
                </div>



            </div>
        </>
    )
}

export default Instamart;