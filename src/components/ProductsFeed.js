import React from 'react'
import Product from './Product'
import './ProductsFeed.css'

const ProductsFeed = ({ products }) => {

    return (
        <div className="productsFeed">
            <div className="productsFeed__first">
                {
                    products.slice(0, 4).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
            <img className="productFeed__image" src="images/4.jpg" alt="" />
            <div className="productsFeed__first">
                {
                    products.slice(4, 7).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
            <div className="productsFeed__first">
                {
                    products.slice(7, 11).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
            <div className="productsFeed__first">
                {
                    products.slice(11, 13).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
            <div className="productsFeed__first">
                {
                    products.slice(13, 17).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
            <div className="productsFeed__first">
                {
                    products.slice(17, 20).map(elem => {
                        const { id, title, description, category, image, price } = elem
                        return (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                price={price}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsFeed
