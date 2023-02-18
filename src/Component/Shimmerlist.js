import './restlist.css'

function Shimmerlist() {
    return (
        <>
          <div className='dummy-pos-re'>
        <div className="restaurant-info">
            
            <div className="wrapper-it">
            <div className="dummy-hero-img"></div>
            <div className="second-container">
                <h1 className="dummy-food-name mb-0"></h1>
                <p className="dummy-c-light fs-2 mb-0 mt-0"></p>
                <p className="dummy-address fs-2 c-light mt-0"></p>

                <div className="info-flex">
                        <div className='some-content'>
                            <div>
                            <p className="rating c-whi fs-2 mb-0"></p>
                    <p className="rating-word c-light fs-1 mt-0" ></p>
                        </div>
                    
                        </div>
                        
                        
                        
                    
                </div>

                
                </div>
                </div>

            <div className='dummy-third-container'>
                    <p className="offer- c-whi fs-2 mb-0 mt-0">50% off up to ₹100 | Use code WELCOME50</p>
                    <p className='c-whi fs-2 mb-0'>FREE DELIVERY</p>
            </div>
            </div>
            
                
            
            
            </div>
            

            <div className="list">
            

            <div className="conatiner">
                <div className="first-container-food">
                    {
                            new Array(1, 2, 3, 4, 5, 6, 7, 8, 9).map((x) => {
                            return <Fooditem />
                        })
                    }
                </div>

                <div className="dummy-second-container-cart">
                    
                </div>
            </div>
        </div>
        
  
        </>
    )
}


function Fooditem() {
    return <>
        <div className="dummy-food-card">
            <div className="dummy-food-1">
               
            </div>
            <div className="dummy-food-2">
                <img  alt="" />
            </div>
        </div>
    </>
}



export default Shimmerlist;