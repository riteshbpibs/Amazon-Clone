import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import './Home.css'
import ProductsFeed from './ProductsFeed';

const Home = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        const getData = async () => {
            await fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => setItems(data)).catch((e) => console.log(e))
        }
        getData()
    }, [])

    return (
        <div className="home">
            <div className="home__container">
                <Banner />
                <ProductsFeed products={items} />
            </div>
        </div>
    )
}

export default Home