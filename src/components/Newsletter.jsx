import { Send } from "@material-ui/icons";
import styled from "styled-components";
import Button from '@mui/material/Button';


const Container = styled('div')({

  height: '30vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgb(242, 240, 240)'
})

const Title = styled('h1')({
  fontSize: '40px',
  marginBottom: '20px',

})


const Desc = styled('div')({
  fontSize: '24px',
  fontWeight: '300',
  marginBottom: '20px',
})



const InputContainer = styled('div')({
  width: '50%',
  height: '40px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid lightgray',
})



const Input = styled('input')({

  border: 'none',
  flex: 8,
  paddingLeft: '20px',
})





const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;