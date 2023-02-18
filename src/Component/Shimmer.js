
let Shimmer = () => {
    let a = []
    return (
        <>
            
            <div className="car-flex d-none">
                <img className="dummy-c-img"  />

                <img className="dummy-c-img"  />
                <img className="dummy-c-img"  />

                <img className="dummy-c-img" />
            </div>
            
            <div>
                <div className="form-wrapper">
                    <input type="text"
                        // setfilteredRestaurantlist(allRestaurantlist)
                        className="input-control" placeholder="Once you try it, you will love it." />
                    <button className="btn-search" >Search</button>

                </div>
            </div>
            <div className="d-flex">
            {
                    new Array(15).fill("").map((x) => {
                        return <ShimmerModal />
                })
            }
           

            </div>
            





        </>
    )
}

function ShimmerModal() {
    return (
        <>
                        <div className="dummy-card">
                            <div className="dummy-img blink-it">
                                <img src="" alt="" />
                </div>
                <div className="card-body">
                    <h1 className="dummy-title mb-0 blink-it"></h1>
                    <p className="dummy-cusi blink-it"></p>
                </div>

                <hr />
                <p className="dummy-offer blink-it mb-0"></p>
                </div>
                    
        </>
    )
}


export default Shimmer;