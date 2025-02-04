import './Navbar.css';
import ngoProfile from '../../assets/ngo_logo.png';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>NGO Panel</h2>
            <img src={ngoProfile} alt="" className="nav-profile" />
        </div>
     );
}
 
export default Navbar;