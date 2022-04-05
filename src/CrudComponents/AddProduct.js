import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Modal, Typography }from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  
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

    //Modal Open/Close State
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// ========= Modal Style ========= //
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: "#000",
    width: 400,
    bgcolor: "#FFF",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    
    return (
        <>
            <Box component="form" onSubmit={(event) => {handleSubmit(event, product)}}>
                <select value={product.category} htmlFor="category" name='category' onChange={handleChange}>
                    <option value='New'>New</option>
                    <option value='Used'>Used</option>
                    <option value='Riding gear'>Riding gear</option>
                    <option value='Casual wear'>Casual wear</option>
                    <option value='Luggage'>Luggage</option>
                </select>
                <br />
                <TextField
                    name="title" value={product.title}
                    onChange={handleChange}
                    variant="outlined" label = "title"
                    sx={{ m: 1 , color:'#FFFFFF'}}/>
                
                <TextField
                    name="description" value={product.description}
                    onChange={handleChange}
                    variant="outlined" label = "description"
                    sx={{ m: 1 , color:'#FFFFFF'}}/>
                <TextField
                    name="price" value={product.price}
                    onChange={handleChange}
                    variant="outlined" label = "price"
                    type='number'
                    sx={{ m: 1 , color:'#FFFFFF'}}/>
                <TextField
                    name="amount" value={product.amount}
                    onChange={handleChange}
                    variant="outlined" label = "amount"
                    type='number'
                    sx={{ m: 1 , color:'#FFF'}}/>   
                    <br /> 
                <Box sx={{padding: 2}}>
                <Button variant="contained" sx={{mr:1, bgcolor:"#000000", color:'#fff', '&:hover': {
                        backgroundColor: '#000',
                        color: '#FFF',},}}><input type='submit' onClick={handleOpen}/></Button>        
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                            <Box sx={modalStyle}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Thank you! Your product has been added.
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <Link to="/shop">Click here to see all resources.</Link>
                              </Typography>
                            </Box>
                          </Modal>
                        </Box>
            </Box>
        </>
    )
}

export default Add; 
