
const Product = (product) => (
    <div>
        <img src={product.primary_image} alt={product.title}/>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
    </div>
);

export default Product;