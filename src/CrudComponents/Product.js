import { useState } from 'react'


const Product = (props) => {
    let emptyProduct = {
        category: 'New' ||'Used'||'Riding gear'||'Casual wear'||'Luggage',
        title: '', 
        description: '', 
        image: '', 
        price: 0, 
        amount: 1, 
        id: props.id
    }
    
    const [product, setProduct] = useState(emptyProduct);
    
    return (
    <div>
        <img src={product.primary_image} alt={product.title}/>
        {product.secondary_image? <img src={product.secondary_image} alt={product.title}/>: null}
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
        <button onClick={props.handleAddToCart(product)}>Add to cart</button>
    </div>
)};

export default Product;