
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(77, 89, 110)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    typography: {
      fontFamily: 'Signika Negative',
    }
  }
});



function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products/:category'>
            <ProductList />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/login'>
            {user ? <Redirect to="/" /> : <Login />}
            <Login />
          </Route>
          <Route path='/register'>
            {user ? <Redirect to="/" /> : <Register />}
            <Register />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
