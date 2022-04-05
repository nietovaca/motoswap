import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
      <footer>
        <div className="engineers-footer-box">
          <div className="engineer">
            <div className="engineer-links-list">
            <h5>Built By: Vanessa Nieto Thrower</h5>
              <a className="engineer-link" href="https://github.com/nietovaca" target="_blank" rel="noopener noreferrer"><GitHubIcon aria-label="GitHub Link" sx={{color:"#000"}}/></a>
              <a className="engineer-link" href="https://www.linkedin.com/in/vthrower/" target="_blank" rel="noopener noreferrer"><LinkedInIcon aria-label="LinkedIn Link"  sx={{color:"#000"}}/></a>
              <a className="engineer-link" href="https://www.instagram.com/nietovaca/" target="_blank" rel="noopener noreferrer"><InstagramIcon aria-label="Instagram Link"  sx={{color:"#000"}}/></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
export default Footer
  