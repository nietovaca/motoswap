import Button from '@mui/material/Button';

// Types 
import { CartItemType} from '../App';
//Styles 
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType; 
    handleAddToCart: (clickedItem: CartItemType) => void; 
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        {item.primary_image? <img src={item.primary_image}  alt= {item.title}/> : <img src={''}  alt= {'stock image'}/>
        }
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={()=>handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
);

export default Item;