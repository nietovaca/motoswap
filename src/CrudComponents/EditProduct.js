import {useState} from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete'

const Edit = (props) => {
    const [item, setProduct] = useState({...props.item});
    const [open, setOpen] = useState(false);

     /////// DIALOG FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const handleChange = (event) => {
        setProduct({ ...item, [event.target.name]: event.target.value })
      }
      
    const handleSubmit = (event, item) => {
    event.preventDefault()
    props.handleUpdate(item)
    handleClose()
    }

    const handleDelete = (event) => {
        axios
          .delete('https://backcap.herokuapp.com/api/products/' + event.target.value)
          .then((response) => {
            handleClose()
            props.getProducts()
          })
    }
    
    return (
        <>
            <div>
                <Button endIcon={<EditIcon/>} aria-label="Edit" sx={{ fontSize: 15, bgcolor:"#000000", color:'#FFD693', p:3, mt:2, '&:hover': {
                        backgroundColor: '#000',
                        color: '#FFD693',} }} onClick={handleOpen}> {item.title} </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="Edit {item.title}"
                    maxWidth="md"
                    className="modal"
                    PaperProps={{sx: {bgcolor: '#FFF'}}}
                  >
                    <DialogTitle variant="h5">Edit {item.title}</DialogTitle>
                    <DialogContent>
                        <Box component="form" onSubmit={(event) => {handleSubmit(event, item)}}>
                            <TextField
                                name="title" value={item.title}
                                onChange={handleChange}
                                variant="outlined" label = "title"
                                sx={{ m: 1 , color:'#FFFFFF'}}/>
                            <select value={item.category} htmlFor="category" name='category' onChange={handleChange}>
                                <option value='New'>New</option>
                                <option value='Used'>Used</option>
                                <option value='Riding gear'>Riding gear</option>
                                <option value='Casual wear'>Casual wear</option>
                                <option value='Luggage'>Luggage</option>
                            </select>
                            <br />
                            <TextField
                                name="description" value={item.description}
                                onChange={handleChange}
                                variant="outlined" label = "description"
                                sx={{ m: 1 , color:'#FFFFFF'}}/>
                            <TextField
                                name="price" value={item.price}
                                onChange={handleChange}
                                variant="outlined" label = "price"
                                type='number'
                                sx={{ m: 1 , color:'#FFFFFF'}}/>
                            <TextField
                                name="amount" value={item.amount}
                                onChange={handleChange}
                                variant="outlined" label = "amount"
                                type='number'
                                sx={{ m: 1 , color:'#FFF'}}/>   
                            <Button variant="contained" sx={{mr:1, bgcolor:"#000000", color:'#fff', '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#FFF',},}}><input type='submit' /></Button>
                            <Button sx={{mr:1, bgcolor:"#000000", color:'#fff', '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#FFF',},}} startIcon={<DeleteIcon />}  onClick={handleDelete} value={item.id}>Delete</Button>
                        </Box>
                    </DialogContent>
                 </Dialog>
            </div>
        </>
    )
}

export default Edit;