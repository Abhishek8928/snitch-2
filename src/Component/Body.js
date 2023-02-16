import Resturanatcard from "./Resturanatcard";
import Shimmer from './Shimmer.js'
import { useState,useEffect } from 'react';

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
    } 
    function filterData(allRestaurantlist, searchText) {
        let filterlist = allRestaurantlist.filter((x) => {
            return (x.data.name.toLowerCase().includes(searchText.toLowerCase()));
        })
        setfilteredRestaurantlist(filterlist)
        
        
        
    }
    let onSearchHandler = () => {
        filterData(allRestaurantlist, text);
    }

    useEffect(() => {
        fetchTheData();
        console.log("api calling")
    }, [])

    useEffect(() => {
        filterData(allRestaurantlist, text);
    }, [text])

    if (filteredRestaurantlist.length === 0) {
        return (
            <>
            
                
                <Shimmer />
               </>
            )
    }


    
    // conditional rendering
    return  (
        <> 
            <div>

            <div className="form-wrapper">
                    <input type="text" onChange={getTextHandler}  value={text}  className="input-control" placeholder="Once you try it, you will love it." />
                        <button className="btn-search" onClick={onSearchHandler}>Search</button>
                        {/* <i class="bi bi-search"></i> */}
                    </div>
            </div>
            <div className="d-flex">
                {filteredRestaurantlist.map((data, index) => {

                    return  <Resturanatcard key={index} restList={data} />
                })
                }
                

            </div> 

        </>
    )
}

export default Body;