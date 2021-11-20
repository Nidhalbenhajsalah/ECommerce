import styled from 'styled-components'
import Product from '../components/product'
import { Box } from '@mui/system'
import { useState, useEffect } from 'react';
import axios from 'axios'


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

            }
        }

        getproducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value))))
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

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
