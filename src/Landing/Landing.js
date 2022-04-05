import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Landing = () => {
    return (
        <>
        <Grid container justify="center" alignItems='center'>
            <div className='landingHero'>
                <div className='landingContainer'>
                <Button variant="contained" sx={{bgcolor:"#000000", color:'#FFD693', p:3, mt:2, '&:hover': {
                        backgroundColor: '#000',
                        color: '#FFD693',}}} 
                        size="large" onClick={()=>{window.location.href='https://motoswapmeet.netlify.app/shop'}}>Shop the Collection</Button>
                </div>
            </div>
        </Grid>    
   
        </>
    )
}

export default Landing
