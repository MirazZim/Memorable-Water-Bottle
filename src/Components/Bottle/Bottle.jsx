
import './bottle.css'

const Bottle = ({bottle}) => {
    
     const {name, img, price, ratings} = bottle;

    return (
        <div className="bottle">
            <h3>Bottles : {name} </h3> 
            <img src={img}  alt="" />
            <p>Price : ${price}</p>
            <p>Ratings : {ratings}</p>
               
        </div>
    );
};

export default Bottle;