


let Footer = () => {
    return (
        <>
    
            <div style={{padding:"0px 4%"}}>
                <hr style={{color:"lightgray",opacity:"0.4"}} />
            </div>
            <div className="footer-wrapper">

                
                <div className="foote-first">
                <img width="160px" src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/blackoption_200x.png?v=1659016547" alt="" />
                

                <ul className="social-handle">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-github"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                </ul>

                    <p className="developer-name mb-0">@developedby.Abhishek</p>
                </div>
                


                <div className="footer-second">
                    <ul className="footer-link">
                        <li>Home</li>
                        <li>Delivery Area</li>
                        <li>Carrer</li>
                        <li>Coustmer Support</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className="footer-second">
                    <ul className="footer-link">
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Refund policy</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className="footer-second">
                    <ul className="footer-link">
                        <li>Download App</li>
                        <li><button><img src="https://cdn.zeptonow.com/mweb-prod/images/app-stores/play-store.svg" alt="" /><span>Get it on playstore</span></button> </li>
                        <li><button><img src="https://cdn.zeptonow.com/mweb-prod/images/app-stores/app-store.svg" alt="" /><span>Get it on Applestore</span></button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;