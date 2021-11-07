import styled from "styled-components"
import { categories } from "../data"
import { CategoryItem } from "./CategoryItem"
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Divider from '@mui/material/Divider';
const Container = styled.div`
    padding: 20px;
    justify-content: space-between;

`
const Categories = () => {
    return (
        <Container>
            <Divider sx={{ marginTop: '4%', }}>
                <Typography variant='h4'>CATEGORIES</Typography>
            </Divider>
            <Box sx={{ display: 'flex', marginBottom: '2%' }}>
                {categories.map(item => (
                    <CategoryItem item={item} />
                ))}

            </Box>
            <Divider sx={{ marginTop: '15%', }}>
                <Typography variant='h4' >TREND</Typography>
            </Divider>

        </Container >
    )
}

export default Categories
