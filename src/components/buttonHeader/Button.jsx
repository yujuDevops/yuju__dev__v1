import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({text,url}) => {
  return (
  
    <Link to={url}>
    <button className="button-moto" >
      {text}
      </button>
      </Link>
  )
}

