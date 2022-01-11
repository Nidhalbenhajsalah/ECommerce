
import Product from '../components/product';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getproducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
                    : `http://localhost:5000/api/products`);

                setProducts(res.data)
            }
            catch (err) {
                console.log(err)

            }
        }
        getproducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value))))
    }, [products, cat, filters])

    useEffect(() => {
        for (let key in filters) {
            if (filters[key] === "All Colors") {
                setFilteredProducts(products)
            }
        }
        for (let key in filters) {
            if (filters[key] === "All Sizes") {
                setFilteredProducts(products)
            }
        }
    }, [products, filters])

    useEffect(() => {
        products.map(item =>
            console.log(item.color, item.size))
    })


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort, products]);

    return (
        <Box>
            {cat
                ? <Product filteredProducts={filteredProducts} />
                : <Product products={products} />
            }
        </Box>
    )
}

export default Products
