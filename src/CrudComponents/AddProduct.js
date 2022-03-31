import React, { useState } from 'react'

const Add = (props) => {
    let emptyProduct = {
        category: 'New' ||'Used'||'Riding gear'||'Casual wear'||'Luggage',
        title: '', 
        description: '', 
        image: '', 
        price: 1, 
        amount: 1 
    }
    const [product, setProduct] = useState(emptyProduct);

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
        props.handleCreate(product)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Name:</label>
                <input type='text' name='title' value={product.title} onChange={handleChange}/>
                <br />
                <br />
                <label>Category:</label>
                <select value={product.category} htmlFor="category" name='category' onChange={handleChange}>
                    <option value='New'>New</option>
                    <option value='Used'>Used</option>
                    <option value='Riding gear'>Riding gear</option>
                    <option value='Casual wear'>Casual wear</option>
                    <option value='Luggage'>Luggage</option>
                </select>    
                <br />
                <br />
                <label htmlFor='description'>Description:</label>
                <input type='text' name='description' value={product.description} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor='image'>Image URL:</label>
                <input type='text' name='image' value={product.image} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor='price'>Price:</label>
                <input type='text' pattern="[0-9]*" name='price' value={product.price} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor='amount'>Quantity in Stock:</label>
                <input type='text' pattern="[0-9]*" name='amount' value={product.amount} onChange={handleChange}/>
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add; 

// category = models.ForeignKey(Category, related_name='product', on_delete=models.CASCADE)
// created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_creator')
// author = models.CharField(max_length=255, default='admin')
// in_stock = models.BooleanField(default=True)
// is_active = models.BooleanField(default=True)
// {/* <select value={product.category} htmlFor="category" name='category' onChange={handleChange}>
//                     <option value='new'>New</option>
//                     <option value='used'>Used</option>
//                 </select>     */}