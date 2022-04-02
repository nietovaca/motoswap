import { useState } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
        <Wrapper>
            <img src={item.primary_image}  alt= {item.title}/>
            <div>
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={()=>handleAddToCart(item)}>Add to cart</Button>
            <div>
                <Button onClick={handleClickOpen}>
                    Details
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{item.title} <br/> ${item.price}</DialogTitle>
                    <DialogContent>
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
            </div>
        </Wrapper>
            
        </>
)};
export default Item;
