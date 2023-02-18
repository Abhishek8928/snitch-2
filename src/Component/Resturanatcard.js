

let Resturanatcard = ({ restList }) => {
    const { name, cloudinaryImageId, cuisines, aggregatedDiscountInfoV2, minDeliveryTime } = restList.data

    return (
        <>
            <div className="card">
                <div className="card-img">
                    <p className={minDeliveryTime >= 1 ? "promoted mt-0 mb-0" : "d-none"}>Promoted</p>
                    {/* <p className={minDeliveryTime > 26 ? "Must Try  mt-0 mb-0" : "d-none"}>Must Try</p> */}
                    <img width="100%" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                </div>
                <div className="card-body">
                    <h1 className="food-title mb-0">{name}</h1>
                    <p  className="food-cui mt-0">{cuisines.join(",")}</p>

                    

                    

                    <p className="offer mb-0">{"⭐" + aggregatedDiscountInfoV2.header + "|" + aggregatedDiscountInfoV2.shortDescriptionList[0].meta}</p>
                </div>
            </div>

        </>
    )
}


export default Resturanatcard;