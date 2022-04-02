import {useState} from 'react'
import axios from 'axios'


const Edit = (props) => {
    let emptyProduct = {
        category: 'New' ||'Used'||'Riding gear'||'Casual wear'||'Luggage',
        title: '', 
        description: '', 
        primary_image: '', 
        secondary_image: '',
        price: 0, 
        amount: 1, 
        id: props.id
    }
    const [item, setProduct] = useState(emptyProduct);

    const handleChange = (event) => {
        setProduct({ ...item, [event.target.name]: event.target.value })
      }
      
    const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(item)
    }

    const handleDelete = (event) => {
        axios
          .delete('https://backcap.herokuapp.com/api/products/' + event.target.value)
          .then((response) => {
            props.getProducts()
          })
    }
    
    return (
        <>
            <details>
                <summary>Edit Product</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Name:</label>
                    <input type='text' name='title' value={item.title} onChange={handleChange}/>
                    <br />
                    <br />
                    <label>Category:</label>
                    <select value={item.category} htmlFor="category" name='category' onChange={handleChange}>
                        <option value='New'>New</option>
                        <option value='Used'>Used</option>
                        <option value='Riding gear'>Riding gear</option>
                        <option value='Casual wear'>Casual wear</option>
                        <option value='Luggage'>Luggage</option>
                    </select>    
                    <br />
                    <br />
                    <label htmlFor='description'>Description:</label>
                    <input type='text' name='description' value={item.description} onChange={handleChange}/>
                    <br />
                    <br />
                    <label htmlFor='primary_image'>Image URL (Primary):</label>
                    <input type='text' name='primary_image' value={item.primary_image} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor='secondary_image'>Image URL (Secondary):</label>
                    <input type='text' name='secondary_image' value={item.secondary_image} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor='price'>Price:</label>
                    <input type='text' pattern="[0-9]*" name='price' value={item.price} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor='amount'>Quantity in Stock:</label>
                    <input type='text' pattern="[0-9]*" name='amount' value={item.amount} onChange={handleChange}/>
                    <br />
                    <br />
                    <input type='submit' />
                </form>
                <button onClick={handleDelete} value={item.id}>X</button>
            </details>
        </>
    )
}

export default Edit;