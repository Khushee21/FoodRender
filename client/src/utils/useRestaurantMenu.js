import { useEffect, useState } from "react";

const useRestraurantMenu=(resId)=>{

    const [resInfo,setResInfo] = useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json=await data.json();
        //  console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestraurantMenu;