import './App.css';
import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

//Components
import Item from './Item/Item';
import Cart from './Cart/Cart'
import Add from './CrudComponents/AddProduct'
import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Styles 
import { Wrapper, StyledButton } from './App.styles';

//Types 
export type CartItemType = {
  id: number; 
  category: number; 
  title: string; 
  description: string; 
  image: string; 
  price: number; 
  in_stock: boolean; 
  amount: number;
  is_active: boolean; 
  created: string;
  updated: string;
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  //Get from API 
  const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://backcap.herokuapp.com/api/products')).json();  

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    // useQuery to load from API 
    'products',
    getProducts
    );
    console.log(data);

    const getTotalItems = (items: CartItemType[]) => 
      items.reduce((ack: number, item) => ack + item.amount, 0); 

    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        //check if item is already in cart
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
       
        if (isItemInCart) {
          return prev.map(item => 
            item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
          );
        }
        //item is added the first time
        return [ ...prev, { ...clickedItem, amount: 1 }];
      });
    }; 

    const handleRemoveFromCart = (id: number) => {
      setCartItems(prev => (
        prev.reduce((ack, item) => {
          if (item.id === id) {
            if (item.amount === 1) return ack; 
            return[ ...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [ ...ack, item];
          }
        }, [] as CartItemType[])
      ))
    }; 

    if (isLoading) return <LinearProgress />;
    if (error) return <div>'Something went wrong ...'</div>
  
  const handleCreate = (addProduct: any) => {
    console.log(addProduct)
    axios
      .post('https://backcap.herokuapp.com/api/products', addProduct)
      .then((response) => {
        console.log(response)
        getProducts()
        
      }).catch((error) => {
        if(error.response){
          console.log(error.response.data);
          
        }
      })
  }

  // const handleDelete = (event: any) => {
  //   axios
  //     .delete('https://backcap.herokuapp.com/api/products' + event.target.value)
  //     .then((response) => {
  //       getProducts()
  //     })
  // }
  //Delete route returns 405, something isn't working properly with the event.target.value to delete by id

  return (
    <Wrapper className="App">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart} />
      </Drawer>  
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Add handleCreate={handleCreate} />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default App;
