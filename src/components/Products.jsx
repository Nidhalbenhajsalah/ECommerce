import styled from 'styled-components'
import Product from '../components/product'
import { Box } from '@mui/system'
import { useState, useEffect } from 'react';
import product from '../components/product';
import axios from 'axios'

const Container = styled.div`
    padding-left:20px;
    padding-right:20px;
    flex-wrap:wrap;
   
`
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

    return (
        <Box>
            {/* <Typography sx={{ marginTop: '10%', justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '40px' }}>TREND</Typography> */}
            {/* {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))} */}
            <Product filteredProducts={filteredProducts} />

        </Box>
    )
}

export default Products
