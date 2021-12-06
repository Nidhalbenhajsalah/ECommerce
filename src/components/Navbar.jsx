import React from 'react'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../redux/apiCalls";


const Container = styled('div')({
    backgroundColor: "white",
    border: 'solid rgb(77, 89, 110)',
    borderWidth: '0 0 0.5px 0',
    alignItems: 'center',

})


const Wrapper = styled('div')({
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const Left = styled('div')({

    flex: 1,
    display: 'flex',
    alignItems: 'center',
})

const SearchContainer = styled('div')({
    alignItems: 'center',
    display: 'flex',
    marginLeft: '25px',
    padding: '5px',
})


const Logo = styled('h1')({
    fontWeight: 'bold'
})


const Center = styled('div')({
    flex: 1,
    textAlign: 'center',
})

const Right = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
})


const MenuItem = styled('div')({
    fontSize: '14px',
    cursor: 'pointer',
    marginLeft: '25px',
})


function Navbar() {
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch();

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     logout(dispatch, {});
    // };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: 'grey', fontSize: '30' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo style={{ color: 'rgb(77, 89, 110)' }}>MyShop</Logo>
                    </Link>
                </Center>
                <Right>
                    <Stack direction="row" spacing={1.5}>
                        <Button variant="outlined" startIcon={<AppRegistrationSharpIcon style={{ fontSize: '16' }} />}>Register</Button>

                        {/* <Button variant="outlined" startIcon={<AssignmentIndOutlinedIcon style={{ fontSize: '16' }} />}>LOGIN</Button> */}
                        <Button variant="outlined" startIcon={<AssignmentIndOutlinedIcon style={{ fontSize: '16' }} />}>LOGOUT</Button>
                    </Stack>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} sx={{ color: "rgb(77, 89, 110)" }}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar
