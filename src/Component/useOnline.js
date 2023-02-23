import { useState,useEffect } from "react"

function useOnline() {
    let [isOffline,setisOffline] = useState(null)
    useEffect(() => {
        window.addEventListener('online', () => {
            setisOffline(true)
        });

        window.addEventListener('offline', () => {
            setisOffline(false)
        });
    },[])
    
    return isOffline;
}

export default useOnline;