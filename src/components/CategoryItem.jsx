
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Container = styled('span')({
  top: 50,
  margin: '3px',
  height: '70vh',
  position: 'relative',
  justifyContent: 'space-between',
  border: 'solid',
  borderColor: 'black',
  backgroundColor: 'rgb(252, 237, 243)',
});

const Image = styled('img')({

  width: '100%',
  height: '100%',
  objectFit: 'cover',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center 40%',
});

const Info = styled('div')({

  position: 'absolute',
  top: 20,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'initial',

});


const Button = styled('button')({

  border: 'none',
  padding: '10px',
  backgroundColor: 'white',
  color: 'gray',
  cursor: 'pointer',
  fontWeight: 600,
  margin: 20
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  // objectFit: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '100%',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));


const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <ImageButton focusRipple>
          <Image src={item.img} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Info>
            <Typography sx={{
              color: 'white', marginBottom: '20px', position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)})`,
            }}>
              {item.title}
              <Button>SHOP NOW</Button>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Info>
        </ImageButton>
      </Link>
    </Container>
  )
}
