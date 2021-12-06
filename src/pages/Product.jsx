import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct, emptyCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 5%;
  display: flex;
  align-items: center;

`;

const ImgContainer = styled.div`
  flex: 1;
  width: 80%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  
`;


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
        setSize(res.data.size)
        setColor(res.data.color)
      }
      catch {

      }
    }
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    }
    else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };


  return (
    <Container style={{ backgroundColor: 'rgb(242, 240, 240)' }}>
      <Navbar />
      <Paper elevation={6}>
        <Wrapper style={{ backgroundColor: 'rgb(242, 240, 240)' }}>
          <ImgContainer >
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>
              {product.desc}
            </Desc>
            <Price>{product.price}.00$</Price>
            <Box sx={{ display: "flex", justifyContent: "space-around", margin: "3vh 0 3vh 0" }} >
              <FormControl>
                <InputLabel>Color</InputLabel>
                <Select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  label="Color"
                >
                  {product.color?.map((color) => (
                    <MenuItem value={color} sx={{ backgroundColor: "white" }}>
                      <Box sx={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: color }} > </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("dec")} />
                <Avatar
                  sx={{ bgcolor: "black" }}
                >{quantity}</Avatar>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <FormControl>
                <InputLabel>Size</InputLabel>
                <Select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  label="Size"
                >
                  {product.size?.map((size) => (
                    <MenuItem value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" onClick={handleClick} startIcon={<AddShoppingCartIcon />} >Add</Button>
              <Button variant="outlined" onClick={handleEmptyCart} startIcon={<RemoveShoppingCartIcon />}>EMPTY</Button>
            </Box>
          </InfoContainer>
        </Wrapper>
      </Paper>
      <Footer />
    </Container>
  );
};

export default Product;