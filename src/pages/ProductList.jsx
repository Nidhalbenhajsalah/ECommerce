import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';




const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });

    }
    const resetFilters = () => {
        setFilters({})
    }


    return (
        <Container style={{ backgroundColor: 'rgb(242, 240, 240)' }}>
            <Navbar />

            <Title>{cat.toUpperCase()}</Title>

            <Filter >
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option selected="selected">
                        All Colors
                    </Option>
                    <Option >White</Option>
                    <Option >Black</Option>
                    <Option >Red</Option>
                    <Option >Blue</Option>
                    <Option >Yellow</Option>
                    <Option >Green</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option selected="selected">
                        All Sizes
                    </Option>
                    <Option >XS</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                </Select>
            </Filter>
            <Button onClick={resetFilters}>Reset Filters</Button>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value='newest'>Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
                </Select>
            </Filter>

            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container >
    );
};

export default ProductList;