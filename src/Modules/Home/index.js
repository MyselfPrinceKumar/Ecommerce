import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero'
import Products from '../../Components/ProductCard'
import FeatureCard from '../../Components/FeatureCard'
import Stats from '../../Components/Stats'
import ProductCard from '../../Components/ProductCard'
import Categories from '../../Components/Categories'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <Hero />
            <Categories />
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTDS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} />
                    :
                    <div>Loading....</div>
            }
            <Products />
            <Stats />
        </div>
    )
}

export default Home