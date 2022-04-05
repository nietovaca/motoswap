import { useState } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import { CardMedia, Typography, CardActions, CardContent } from '@mui/material';

// Types 
import { CartItemType} from '../App';
//Styles 
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType; 
    handleAddToCart: (clickedItem: CartItemType) => void; 
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    return (
        <>
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    height="550"
                    image={
                        item.primary_image? item.primary_image : '../img/motogirl.png'
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title} ${item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>handleAddToCart(item)} variant="contained" sx={{bgcolor:"#000000", color:'#fff', '&:hover': {
                        backgroundColor: '#000',
                        color: '#FFF',},}} >Add to cart</Button>
                    <Button onClick={handleClickOpen} variant="contained" sx={{bgcolor:"#000000", color:'#fff', '&:hover': {
                        backgroundColor: '#000',
                        color: '#FFF',},}} >
                    Details
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>{item.title} <br/> ${item.price}</DialogTitle>
                        <DialogContent>   
                            <CardMedia
                                component="img"
                                image={item.secondary_image?  item.secondary_image : '../img/motogirl.png'}
                            />
                            <DialogContentText>
                                {item.description}
                            </DialogContentText>
                            <DialogContentText>
                                {item.amount} left in stock
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={()=>handleAddToCart(item)}><AddShoppingCartIcon/></Button>
                        <Button onClick={handleClose}><CloseIcon/></Button>
                        </DialogActions>
                    </Dialog>
                </CardActions>
           </Card>
            
            
            <div>
                
            </div>
            
        </>
)};
export default Item;


// {
//     if (item.primary_image) {<img src='item.primary_image' />
//         if (item.secondary_image) {<img src='item.secondary_image' alt='item.title' />}
//     } else if (item.imgURL) {<img src='item.imgURL' alt='item.title'/>
//     } else {<img src='./img/motogirl.png' alt='Default Image'/>}
//     }