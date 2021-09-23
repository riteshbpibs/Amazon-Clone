import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useItemValue } from './StateProvider'
import Subtotal from './Subtotal'

const Checkout = () => {

    const [{ basket }, dispatch] = useItemValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="images/4.jpg"
                    alt="" />
                <div>
                    {basket.length == 0 ? (
                        <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                    ) : (
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    )}
                    {
                        basket?.map((item) => {
                            const { id, title, price, image, rating, description } = item
                            return <CheckoutProduct
                                id={id}
                                title={title}
                                price={price}
                                image={image}
                                rating={rating}
                                description={description}
                            />
                        })
                    }

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
