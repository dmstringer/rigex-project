import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import routePaths from '../../constants/routePaths';
import logo from "../../assets/rigex-logo-small.svg";
import "./navBar.scss"
import history from "../../utils/history" 

export default function NavBar() {

  return (
    <div className="navBar">
      <div className="logo">
        <button
        onClick={() => history.push(routePaths.landing)}
        >
          <img src={logo} alt="Rigex"/>
        </button >
      </div>
      <div className="iconBox">
        <button aria-label="search bar button">
          <SearchIcon fontSize="large"/>
        </button>
        <button aria-label="account of current user">
          <PersonOutlineOutlinedIcon fontSize="large"/>
        </button>
      </div>
    </div>
  );
}
