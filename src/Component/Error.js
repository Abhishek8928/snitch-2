import {useRouteError} from 'react-router-dom'
function Error() {

    let err = useRouteError();

    let {status,statusText} = err;
    console.log(err)
    return (
        <>
            <div className='error-flex'>
                <div>
                    <img width="400px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck" alt="" />
                <h1 className='error-title mt-0 mb-0'>Page not found</h1>
                <p className='error-desc '> Uh-oh! Looks like the page you are trying to access, <br /> doesn't exist. Please start refresh.</p>

                

                </div>
                
            </div>
        </>
    )
}

export default Error;