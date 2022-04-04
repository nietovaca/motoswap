import { useState } from 'react'

const Add = (props) => {
    let emptyProduct = {
        category: 'New' ||'Used'||'Riding gear'||'Casual wear'||'Luggage',
        title: '', 
        description: '', 
        imgURL: '', 
        price: 1.99, 
        amount: 1, 
    }
    const [product, setProduct] = useState(emptyProduct);

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })}
        console.log(product)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(product)
     
    }
    
    console.log(product)
    
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
                <label htmlFor='imgURL'>Image URL:</label>
                <input type='text' name='imgURL' value={product.imgURL} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor='price'>Price:</label>
                <input type='number' name='price' value={product.price} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor='amount'>Quantity in Stock:</label>
                <input type='number' name='amount' value={product.amount} onChange={handleChange}/>
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add; 
