import img from './LOGO HE VINCI.png'
import './Header.css'
const Header = (props) => {
    return (
      <>
        <img class="logo" src={img}></img>
        <h1>{props.course}</h1>
      </>
    )
}

export default Header