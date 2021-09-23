import React, { useEffect } from 'react'
import Banner from './Banner';
import './Home.css'
import ProductsFeed from './ProductsFeed';
import { useItemValue } from './StateProvider';

const Home = () => {

    const [{ items }] = useItemValue()

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