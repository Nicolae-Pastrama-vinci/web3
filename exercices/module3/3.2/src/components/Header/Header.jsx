import img from './LOGO HE VINCI.png'
import './Header.css'
const Header = ({course}) => {
    return (
      <>
        <img className="logo" src={img}></img>
        <h1>{course}</h1>
      </>
    )
}

export default Header