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
    }, [])

    // if (filteredRestaurantlist.length === 0) {
    //     return (
    //         <>
            
    //         <div className="form-wrapper">

    //                 <input type="text" onChange={getTextHandler = (e) => {
    //                     settext(e.target.value)
    //                     }} value={text}  className="input-control" placeholder="Once you try it, you will love it." />
    //                     <button className="btn-search" onClick={onSearchHandler}>Search</button>
                    
                    
                
    //         </div>
    //         <div className="msg-no">

    //                 {/* <h1 class="">"No match found"</h1> */}
    //             </div>
    //             </>
    //         )
    // }
    
    // conditional rendering
    return filteredRestaurantlist.length === 0 ? (
        <Shimmer />
    ) : (
        <> 
            <div>

            <div className="form-wrapper">
                    <input type="text" onChange={getTextHandler = (e) => {
                        settext(e.target.value)
                        // setfilteredRestaurantlist(allRestaurantlist)
                        }} value={text}  className="input-control" placeholder="Once you try it, you will love it." />
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