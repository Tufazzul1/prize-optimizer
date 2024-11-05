import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, type, className, to }) => {
  return to ? (
    <Link to={to} className={`btn font-normal px-4 bg-[#FF5C35] border-none text-white hover:bg-[#fa643f] ${className}`}>
      {text}
    </Link>
  ) : (
    <button type={type} className={`btn font-normal px-4 bg-[#FF5C35] border-none text-white hover:bg-[#fa643f] ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

// Define prop types
Button.propTypes = {
  text: PropTypes.string.isRequired,  
  onClick: PropTypes.func,           
  type: PropTypes.string,             
  className: PropTypes.string,       
  to: PropTypes.string,         
};

// Default props
Button.defaultProps = {
  type: 'button',   
  className: '', 
  onClick: null,    
  to: null,         
};

export default Button;