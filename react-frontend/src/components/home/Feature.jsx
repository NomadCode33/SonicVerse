import { Link } from 'react-router-dom';
import "../../css/home.css"

const Feature = ({ title, link, img, altDesc, description, buttonText }) => {
  return (
    <div className="feature">
        <div className="feature-content">
            <h2 className="comp-item russo-one">{title}</h2>
            <Link to={link}><img src={img} alt={altDesc} /></Link>
            <p className="page-describe exo-2">{description}</p>
            <Link className="main-button exo-2-600" to={link}>{buttonText}</Link>
        </div>
    </div>
  )
}

export default Feature

/*
The old way of doing it of just using the feature:
const Feature = ({ title, link, img, altDesc, description, buttonText }) => {
  return (
    <div className="feature">
        <div className="feature-content">
            <h2 className="bangers comp-item">{title}</h2>
            <a href={link}><img src={img} alt={altDesc} /></a>
            <p className="page-describe">{description}</p>
            <a className="main-button" href={link}>{buttonText}</a>
        </div>
    </div>
  )
}
*/