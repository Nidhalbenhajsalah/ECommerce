

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));


const Product = ({ filteredProducts, products }) => {
  return (
    <Box sx={{ marginTop: '5%', }}>
      {filteredProducts
        ?
        <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridColumnGap: "2.5%", alignItems: "center", margin: "0 5% 0 5%" }}>
          {filteredProducts.map((item) => (
            <Card sx={{ marginBottom: "10%" }}>
              <CardMedia
                key={item._id}
                component="img"
                image={item.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h5">
                  {item.price}.00$
                </Typography>
                <Stack
                  sx={{ border: "1px solid black", borderRadius: "5px", padding: "5px", marginTop: "5px" }}
                  direction="row"
                  spacing={2}
                >
                  Available Colors:<br /> {item.color.map((color) => (
                    <Item sx={{ backgroundColor: color, height: "5px" }}></Item>
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-evenly" }}>
                <Link to={`/product/${item._id}`}>
                  <VisibilityOutlinedIcon sx={{ color: 'rgb(77, 89, 110)' }} />
                </Link>
                <ShoppingCartOutlinedIcon sx={{ color: 'rgb(77, 89, 110)' }} />
              </CardActions>
            </Card>
          ))}
        </Box>
        :
        <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridColumnGap: "2.5%", alignItems: "center", margin: "0 5% 0 5%" }}>
          {products.map((item) => (
            <Card sx={{ marginBottom: "10%" }}>
              <CardMedia
                key={item._id}
                component="img"
                image={item.img}
                alt="green iguana"
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h6">
                  {item.price}.00 $
                </Typography>


                <Stack
                  sx={{ border: "1px solid black", borderRadius: "5px", padding: "5px", marginTop: "5px" }}
                  direction="row"
                  spacing={2}
                >
                  Available Colors:<br /> {item.color.map((color) => (
                    <Item sx={{ backgroundColor: color, height: "5px" }}></Item>
                  ))}
                </Stack>

              </CardContent>
              <CardActions sx={{ justifyContent: "space-evenly" }} >
                <Link to={`/product/${item._id}`}>
                  <VisibilityOutlinedIcon sx={{ color: 'rgb(77, 89, 110)' }} />
                </Link>
                <ShoppingCartOutlinedIcon sx={{ color: 'rgb(77, 89, 110)' }} />
              </CardActions>
            </Card>
          ))}
        </Box>
      }
    </Box >

  )
}

export default Product
