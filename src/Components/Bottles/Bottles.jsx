import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'



const bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }
        ,[])

        const handleAddtocart = bottle =>{
            const newCart = [...cart,bottle];
            setCart(newCart);
        } 

    return (
        <div>
            <h3>Bottles Here : {bottles.length} </h3>
            <h3>Added to cart : {cart.length} </h3>
            <div className="bottle-container">
            {
                bottles.map(bottle => 
                <Bottle 
                     key={bottle.id}
                     bottle={bottle} 
                     handleAddtocart = {handleAddtocart} 
                >

                     </Bottle>)
            }
            </div>
        </div>
    );
};

export default bottles;