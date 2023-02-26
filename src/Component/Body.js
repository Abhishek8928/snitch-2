import Resturanatcard from "./Resturanatcard";
import Shimmer from './Shimmer.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useOnline from "./useOnline";
import no from '../../Helper/no.gif'
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

    let result = useOnline();

    

    useEffect(() => {
        fetchTheData();
    }, [])

    useEffect(() => {
        filterData(allRestaurantlist, text);
    }, [])

    if (result === false) {
        return (<div className="no-conn">

            <div className="inner-msg">
                <img  width="50%" src={no} alt="" />
                <h1 className="msg mt-0 mb-0">Uh - OH!</h1>
                <p className="msg-desc mt-0 mb-0">slow or no internet connection</p>
                <p className="msg-desc mt-0">please check your internent connection and try again</p>
            </div>
          </div>)
    }
    if(allRestaurantlist?.length === 0) return  <Shimmer />
    if (filteredRestaurantlist.length === 0) {
        return (
            <>
                <Carousel />
            <div>

            <div className="form-wrapper">
                    <input type="text" onChange={getTextHandler}  value={text}  className="input-control" placeholder="Once you try it, you will love it." />
                        <button className="btn-search" >Search</button>
                    </div>
                </div>
                <div className="no-flex">
                    <div>
                    <h1 className="no-res-msg mb-0">no restaurant is avaiable</h1>

<p className="no-res-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem5</p>
                    </div>
                
                </div>
                
            </>
        )
    }
    return (
        <> 
            
            <Carousel />
            <div>

            <div className="form-wrapper">
                    <input type="text" onChange={getTextHandler}  value={text}  className="input-control" placeholder="Once you try it, you will love it." />
                        <button className="btn-search" >Search</button>
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