import React from 'react'
import { useHistory } from 'react-router'
import './Success.css'

const Success = () => {

    const history = useHistory()

    return (
        <div className="success">
            <h1>Order placed successfully</h1>
            <h4>Thank you for shopping at Amazon 😄</h4>
            <button onClick={e => history.push("/")}>Go to Homepage</button>
        </div>
    )
}

export default Success
