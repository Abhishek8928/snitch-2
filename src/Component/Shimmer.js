
let Shimmer = () => {
    let a = []
    return (
        <>
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
                    new Array(1, 2, 3, 4, 5, 6).map((x) => {
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
                            <div className="dummy-img">
                                <img src="" alt="" />
                            </div>
                        </div>
                    
        </>
    )
}


export default Shimmer;