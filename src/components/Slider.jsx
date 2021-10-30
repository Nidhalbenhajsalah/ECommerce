import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';

const useStyles = makeStyles({
    slide: {
        opacity: 0,
        transitionDuration: '1s ease',
    },
    slideActive: {
        opacity: 1,
        transitionDuration: '1s',
        transform: 'scale(1.08)'
    }
})

const Container = styled('div')({

    witdh: '100%',
    height: '70vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    border: 'solid',
    borderColor: 'white'

})


const Arrow = styled('div')({
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: 0.7,
    zIndex: 2,

})

const Btnwrap = styled('div')({
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
})

const Wrapper = styled('div')({
    height: '100%',
    display: 'flex',
})

const Slide = styled('div')({

    display: 'flex',
    aligntItems: 'center',
    width: '100vw',
    height: '100vh',
})

const ImgContainer = styled('div')({

    flex: 1,
    height: '100%',
    paddingLeft: '5%'
})

const Title = styled('h1')({
    fontSize: '70px',
})

const Description = styled('p')({
    margin: '50px 0px',
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '3px',
})

const Button = styled('button')({
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
})

const Img = styled('img')({
    height: '60%',
    padding: '50px',

})


const InfoContainer = styled('div')({
    height: '50%',
    // flex: 1,
    // padding: '5%',
    paddingRight: '20%',
    paddingTop: '10%',


})


const Slider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = sliderItems.length;
    const classes = useStyles()

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(sliderItems) || sliderItems.length <= 0) {
        return null;
    }
    return (
        <Container>
            {sliderItems.map((item, index) => (
                <Wrapper className={index === current ? classes.slideActive : classes.slide} key={index}>
                    {index === current && (
                        <Slide>
                            <ImgContainer>
                                <Img src={item.img} alt='alt' />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Btnwrap>
                                    <Arrow sx={{ backgroundColor: 'black' }} onClick={prevSlide}>
                                        <ArrowBackIosOutlinedIcon sx={{ color: 'white' }} />
                                    </Arrow>
                                    <Button>SHOW NOW</Button>
                                    <Arrow sx={{ backgroundColor: 'black' }} onClick={nextSlide}>
                                        <ArrowForwardIosOutlinedIcon sx={{ color: 'white' }} />
                                    </Arrow>

                                </Btnwrap>
                            </InfoContainer>
                        </Slide>
                    )}
                </Wrapper>
            ))}

        </Container >
    )
}

export default Slider
