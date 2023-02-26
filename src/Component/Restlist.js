import './restlist.css'
import Shimmerlist from './Shimmerlist';
import Shimmer from '../Component/Shimmer'
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { imageUrl } from "../../Constant";
import Vegsearch from '../../Helper/Vegsearch';
function Restlist() {
    const { id } = useParams();

    let [txt,setTxt] = useState("")
    let [res, setres] = useState([])

    let [resItem, setresItem] = useState([]);
    let [resfilterItem, setresfilterItem] = useState([]);
    useEffect(() => {
        getResaturantinfo()
    }, [])
    function Search(restaurantlist, txt) {
        // console.log(restaurantlist)
        let result = restaurantlist.filter((x) => {
            return (x.name.toLowerCase().includes(txt.toLowerCase()));
        })
        setresfilterItem(result)
        
    }
    function getText(e) {
        setTxt(e.target.value);
        if (txt === '')
        {
            // setresfilterItem(resItem)
        }
        else {
            Search(resItem,txt)
        }
    }

    
    function onclicked(e) {
        if (e.target.checked) {
            let dataGet = Vegsearch(resItem);
            setresfilterItem(dataGet)
            console.table(dataGet)
        }  
        else {
            onlynonveg()
        }
    } 
    
    function onlynonveg() {
        setresfilterItem(resItem)
    }
    async function getResaturantinfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0300092&lng=73.09548509999999&menuId=" + id)
        let convertToJson = await data.json();
        setres(convertToJson);
        setresItem(Object.values(convertToJson?.data?.menu?.items))
        setresfilterItem(Object.values(convertToJson?.data?.menu?.items))
    }
    let rsConverter = res?.data?.costForTwo / 100;
    if (resItem.length == 0) {
        return <Shimmerlist />
    }
    
    return  (<>
        
<div className='col-b'>
        <div className='pos-re'>
        <div className="restaurant-info">
            
            <div className="wrapper-it">
            <img className="img-resize" src={imageUrl + res?.data?.cloudinaryImageId} alt="" />
            <div className="second-container">
                <h1 className="food-name mb-0">{res?.data?.name}</h1>
                <p className="c-light fs-2 mb-0 mt-0">{res?.data?.cuisines.join(",")}</p>
                <p className="address fs-2 c-light mt-0">{res?.data?.restaurantSlug.restaurant}</p>

                <div className="info-flex">
                        <div className='some-content'>
                            <div>
                            <p className="rating c-whi fs-2 mb-0">⭐ {res?.data?.avgRatingString}</p>
                    <p className="rating-word c-light fs-1 mt-0" >{res?.data?.totalRatingsString}</p>
                        </div>
                    
                        </div>
                        
                        <div className='some-content'>
                            <div>
                            <p className="delivery-time c-whi fs-2 mb-0">{ res?.data?.sla?.deliveryTime}  min</p>
                        <p className='c-light fs-1 mt-0'>Delivery time</p>
                            </div>
                        
                    </div>
                        <div className='some-content'>
                            <div>
                            <p className="delivery-time c-whi fs-2 mb-0">₹ { rsConverter}</p>
                        <p className='c-light fs-1 mt-0'>{ res?.data?.costForTwoMsg}</p>
                            </div>
                        
                    </div>
                    
                </div>

                
                </div>
                </div>

            <div className='third-container d-third-none'>
                    <p className="offer- c-whi fs-2 mb-0 mt-0">50% off up to ₹100 | Use code WELCOME50</p>
                    <p className='c-whi fs-2 mb-0'>FREE DELIVERY</p>
            </div>
            </div>
            <div className="flexible">
                <div className="card-remove">
                    
                        
                        <input type="text" onChange={getText} value={txt} className="input-control-list" placeholder='Search for food...'/>
                        
            
                <div className="checkbox favourite">
                    <input onClick={onclicked} type="checkbox" name="" id="" />
                    <span className='fs-2'>Veg Only</span>
                    </div>
                    <div className='favourite checkbox'>
                    <i class="bi bi-heart fs-2"></i>
                <span className="fs-2 mt-0 mb-0">Favourite</span>
                </div>
                
            </div>
        </div>
        
            
        </div>
        


        <div className="list">
            

                <div className="conatiner">
                    {
                        
                    }
                <div className="first-container-food">
                        {(resfilterItem.length === 0) ? <>
                            <div className="no-flex">
                    <div>
                    <h1 className="no-res-msg mb-0">No food avaiable on desired name</h1>

<p className="no-res-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem5</p>
                    </div>
                
                </div></> :
                        resfilterItem.map((x,index) => {
                            return <Fooditem key={index} data={x} />
                        })
                    }
                </div>

                <div className="second-container-cart">
                    <h1 className='cart-title'>Cart Empty</h1>

                    <img width="100%" className='food-cart' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="" />
                    <p className="cart-desc">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                </div>
            </div>
        </div>
        </div>
    </>)
}




function Fooditem(props) {
    let [count, setCount] = useState(true)
    
    let [number,setNumber] = useState(1)
    return <>
        <div className="food-card">
            <div className="food-1">
                <div className="tag">
                     <div className={props.data.isVeg === 0 ? "non-veg" : "veg"}></div>
                    
                    
                </div>
                <h1 className='mb-0'>{props.data.name}</h1>
                <small className="fs-2 food-price">₹{props.data.price
/100}</small>

                <p className="food-desc mt-0">{props.data.description}</p>
            </div>
            <div className="food-2">
                <img className={props.data.cloudinaryImageId ? "list-img rounded" : "hide-img"} src={imageUrl + props.data.cloudinaryImageId} alt="" />
                

                <div className="abs">

                    {count ?(<div className='abs'>
                        <button className="btn-Add m-xl" onClick={() => {
                        setCount(false)
                            }}>Add</button>
                    </div>)        :
                        (
                            <div className='abs'>
                                
                                <button className="btn-Add">
                                <div className='d-flex-btn'>
                                        <button className='small-btn' onClick={() => {
                                            number === 0 ? setCount(true) : (setNumber(number--))
                            }} ><i class="fs-1 bi bi-dash-lg"></i></button>
                            
                            <small className='count'>{number}</small>

                                        <button className='small-btn' onClick={() => {
                                            setNumber(number++)
                            }}><i class="fs-1 bi bi-plus-lg"></i></button>
                            
                            </div>
                            
                            
                                </button>
                                    </div>
                            

                        )
                        
                    }
                    </div>
                    
                </div>
            </div>
        
    </>
}
export default Restlist;