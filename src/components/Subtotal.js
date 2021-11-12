import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useItemValue } from './StateProvider'
import { getBasketTotal } from './Reducer'
import './Subtotal.css'
import { useHistory } from 'react-router'

const Subtotal = () => {

    const history = useHistory()
    const [{ basket, user }, dispatch] = useItemValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This orders contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {!user ? (
                <button disabled="true">Login to Checkout</button>
            ) : (
                basket.length === 0 ? (
                    <button disabled="true" style={{ cursor: "not-allowed" }}>Add items to basket</button>
                ) : (
                    <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
                )
            )}
        </div>
    )
}

export default Subtotal
