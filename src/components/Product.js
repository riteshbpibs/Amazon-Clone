import React from 'react'
import './Product.css'
import { useItemValue } from './StateProvider'

const Product = ({ id, title, description, category, image, price }) => {

    const [{ }, dispatch] = useItemValue();

    const addItemToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                description: description
            }
        })
    }

    return (
        <div className="product">
            <p className="product__category">{category}</p>
            <img
                className="product__image"
                height={200}
                width={200}
                src={image}
                alt="" />
            <h4 className="product__title">{title}</h4>
            <p className="product__description">{description}</p>
            <div className="product__price">
                ${price}
            </div>
            <button className="product__button" onClick={addItemToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
