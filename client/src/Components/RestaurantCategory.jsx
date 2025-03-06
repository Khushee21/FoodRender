import { useState } from "react";
import ItemList from "./ItemList";
import React from "react";

const RestaurantCategory = ({data, isVisible, setShowIndex, index}) => {
   
    const handleClick = () => {
        setShowIndex(prevIndex => (prevIndex === index ? null : index));
    };
    
    return (
        <div>
           {/*header*/}
           <div className="cat-header">
               <div className="cat-inner-header" onClick={handleClick}>
                   <span className="cat-name">{data.title} ({data.itemCards.length})</span>
                   <span>⬇️</span>
               </div>
               {isVisible && <ItemList items={data.itemCards}/>}
           </div>
           {/*accordion  body*/}
        </div>
    );
}

export default RestaurantCategory;
