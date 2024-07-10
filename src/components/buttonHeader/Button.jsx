import './Button.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export const Button = ({text,url}) => {
  return (
  
    <Link to={url}>
    <button className="button-moto" >
      {text}
      </button>
      </Link>
  )
}

Button.propTypes = {
text: PropTypes.string.isRequired,
url: PropTypes.string.isRequired

}
