import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{bgcolor:'#ffffff'}}>
        <Toolbar disableGutters>
        <img src="./img/smolestlogo.png" alt="Motoswap Logo" />     
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Box sx={{ my: 2, color: 'black', display: 'block' }}
              >
              <button><Link to='/shop'>Shop</Link></button>
              <button><Link to='/add'>Swap</Link></button>
              <button><Link to='/'>Home</Link></button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;