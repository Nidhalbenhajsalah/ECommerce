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
            <Divider >
                <Typography variant='h4'>CATEGORIES</Typography>
            </Divider>
            <Box sx={{ display: 'grid', marginBottom: '2%', gridTemplateColumns: "1fr 1fr 1fr", width: "75%", margin: "0 10% 0 10%" }}>
                {categories.map(item => (
                    <CategoryItem item={item} key={item} />
                ))}

            </Box>
            <Divider sx={{ marginTop: '15%', }}>
                <Typography variant='h4' >TREND</Typography>
            </Divider>

        </Container >
    )
}

export default Categories
