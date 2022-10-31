import {Link} from 'react-router-dom';
import nightMode from "../../assets/nightMode"
import { useContext } from "react"

const Navbar = () => {
  const night = useContext(nightMode);
  return (
    <div>
      <Link key={`home`} to={`/`}>Home </Link>
      <Link key={`about`} to={`/about`}>About </Link>
      <Link key={`works`} to={`/works`}>Works </Link>
      <button onClick={night.toggleNM}>Night mode</button>
    </div>
  )
}

export default Navbar