import React from 'react'
import './CheckoutProduct.css'
import { useItemValue } from './StateProvider'

const CheckoutProduct = ({ id, title, price, image, description }) => {

    const [{ }, dispatch] = useItemValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__description">{description}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
