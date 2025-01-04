
import './bottle.css'

const Bottle = ({bottle, handleAddtocart}) => {
    
     const {name, img, price, ratings} = bottle;

    return (
        <div className="bottle">
            <h3>Bottles : {name} </h3> 
            <img src={img}  alt="" />
            <p>Price : ${price}</p>
            <p>Ratings : {ratings}</p>
            <button onClick={() => handleAddtocart(bottle)}>Purchase</button>
               
        </div>
    );
};

export default Bottle;