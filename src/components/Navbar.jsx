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

const Container = styled('div')({
    height: '60px'
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
                    <Logo>MyShop</Logo>
                </Center>
                <Right>
                    <Stack direction="row" spacing={1.5}>
                        <Button variant="outlined" startIcon={<AppRegistrationSharpIcon style={{ fontSize: '16' }} />}>Register</Button>
                        <Button variant="outlined" startIcon={<AssignmentIndOutlinedIcon style={{ fontSize: '16' }} />}>Sign In</Button>
                    </Stack>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar