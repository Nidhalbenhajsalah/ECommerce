

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';

const Product = ({ filteredProducts, products }) => {
  return (
    <Box sx={{ width: '100 %', height: '100%', marginTop: '5%', }} >
      {filteredProducts
        ?
        <ImageList variant="masonry" cols={4} gap={14} style={{ padding: '5%' }}>
          {filteredProducts.map((item) => (
            <ImageListItem key={item.img} sx={{ margin: '5%' }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ maxWidth: '100%' }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Typography>{item.title}</Typography>
                <BottomNavigation
                  showLabels
                >
                  <Link to={`/product/${item._id}`}>
                    <BottomNavigationAction label="Infos" icon={<VisibilityOutlinedIcon />} />
                  </Link>
                  <BottomNavigationAction label="Add" icon={<ShoppingCartOutlinedIcon />} />
                </BottomNavigation>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
        :
        <ImageList variant="masonry" cols={4} gap={8} style={{ padding: '5%' }}>
          {products.map((item) => (
            <ImageListItem key={item.img} sx={{ margin: '5%' }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              // style={{ maxWidth: '100%' }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Typography>{item.title}</Typography>
                <BottomNavigation
                  showLabels
                >
                  <Link to={`/product/${item._id}`}>
                    <BottomNavigationAction label="Infos" icon={<VisibilityOutlinedIcon />} />
                  </Link>
                  <BottomNavigationAction label="Add" icon={<ShoppingCartOutlinedIcon />} />
                </BottomNavigation>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      }
    </Box >

  )
}

export default Product
