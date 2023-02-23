import Resturanatcard from "./Resturanatcard";
import Shimmer from './Shimmer.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useOnline from "./useOnline";
let Body = () => {

    const [text, settext] = useState('');
    const [filteredRestaurantlist, setfilteredRestaurantlist] = useState([]);
    const [allRestaurantlist, allsetRestaurantlist] = useState([]);

    async function fetchTheData(){
        let nonReadable = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0300092&lng=73.09548509999999&page_type=DESKTOP_WEB_LISTING");
        let result = await nonReadable.json();
        allsetRestaurantlist(result.data.cards[2].data.data.cards)
        setfilteredRestaurantlist(result.data.cards[2].data.data.cards)
    }

    

    function getTextHandler(e) {
        settext(e.target.value)

        if (text === '')
        {
            setfilteredRestaurantlist(allRestaurantlist)
        }
        else {
            filterData(allRestaurantlist, e.target.value)
        }
    } 
    function filterData(allRestaurantlist, searchText) {
        let filterlist = allRestaurantlist.filter((x) => {
            return (x.data.name.toLowerCase().includes(searchText.toLowerCase()));
        })
        setfilteredRestaurantlist(filterlist)
        
    }
    // let onSearchHandler = () => {
    //     filterData(allRestaurantlist, text);
    // }

    useEffect(() => {
        fetchTheData();
    }, [])

    useEffect(() => {
        filterData(allRestaurantlist, text);
    }, [])

    
    return (allRestaurantlist?.length === 0) ? (
        <Shimmer />
    ) : 
    (
        <> 
            
            <Carousel />
            <div>

            <div className="form-wrapper">
                    <input type="text" onChange={getTextHandler}  value={text}  className="input-control" placeholder="Once you try it, you will love it." />
                        {/* <button className="btn-search" onClick={(e) => {
                            
                        }}>Search</button> */}
                        {/* <i class="bi bi-search"></i> */}
                    </div>
            </div>
            <div className="d-flex">
                {filteredRestaurantlist?.map((data, index) => {
                    
                    return <Link to={"/restaurant/" + data.data.id} ><Resturanatcard key={index} restList={data} /></Link> 
                })
                }
                

            </div> 

        </>
    )
}


let Carousel = () => {
    return (
        <>
            <div className="car-flex d-none">
                <img className="c-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" />

                <img className="c-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo" alt="" />
                <img className="c-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" alt="" />

                <img className="c-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" alt="" />
            </div>
        </>
    )
} 
export default Body;