import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items); // Check if it's an array

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch action
   dispatch(addItem(item));

  };

    return (
        <div>
            {items?.map((item) => (
                <div key={item.card.info.id} className="cat-id">
                  <div className="cat-content">
                    <div className="cat-info">
                        <span >{item.card.info.name}</span>
                        <span> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100  :  item.card.info.price / 100}</span>
                    </div>
                      <p className="cat-des">{item.card.info.description}</p>
                   </div>
                   <div className="cat-img-content">
                     <div className="cat-btn-content">
                        <button className="cat-btn"onClick={() => handleAddItem(item)}
  
                        //dispatch action
                        >Add +</button>
                     </div>
                     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/" + item.card.info.imageId} className="cat-img"/>
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default ItemList;
