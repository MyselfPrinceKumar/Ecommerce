import ProductCard from '../../../Components/ProductCard'
import Categories from '../../../Components/Categories'
import { useState, useEffect } from 'react'
const Products = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div>
            <Categories />
            <div className="flex flex-col text-center w-full">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTDS</h2>
                <h1 className="sm:text-3xl text-2xl title-font text-gray-900 font-semibold">ALL PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} />
                    :
                    <div></div>
            }
        </div>
    )
}

export default Products