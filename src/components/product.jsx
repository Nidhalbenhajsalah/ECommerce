
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box } from '@mui/system';
import { popularProducts } from '../data'

import StarBorderIcon from '@mui/icons-material/StarBorder';




const Container = styled('div')({

  flex: 1,
  margin: ' 5px',
  minWidth: '280px',
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5fbfd',
  position: 'relative',
  marginTop: '5%',
})







const product = ({ filteredProducts }) => {
  return (
    <Box sx={{ width: '100 %', height: '100%', marginTop: '5%', }} >
      <ImageList variant="masonry" cols={3} gap={8}>
        {filteredProducts.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title + item.id}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                  <ShoppingCartOutlinedIcon />
                  <VisibilityOutlinedIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box >

  )
}

export default product
