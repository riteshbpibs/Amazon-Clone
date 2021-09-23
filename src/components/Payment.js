import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useHistory } from 'react-router'
import { useItemValue } from './StateProvider'

const Payment = () => {

    const history = useHistory()
    const [{ basket }, dispatch] = useItemValue()

    const placeOrder = () => {
        dispatch({
            type: "PLACE_ORDER",
            payload: ""
        })
        history.push("/success")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h2>
                    Checkout ({
                        <Link to='/checkout'>
                            {basket?.length} items
                        </Link>
                    })
                </h2>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>123@example.com, React Lane, JavaScript Colony</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__items">
                        <h3>Review items and delivery</h3>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    description={item.description}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    {basket.length == 0 ? (
                        <button disabled="true" style={{ cursor: "not-allowed" }}>Place Order</button>
                    ) : (
                        <button onClick={placeOrder}>Place Order</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Payment
