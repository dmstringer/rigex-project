import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import routePaths from '../../constants/routePaths';
import logo from "../../assets/rigex-logo-small.svg";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import "./navBar.scss"

export default function NavBar() {

  return (
    <div className="navBar">
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Button href={routePaths.landing} color="inherit" >
            <img src={logo} alt="Rigex" />
          </Button>
          <div className="nav-icon-box">
            <IconButton aria-label="search bar button" >
              <img src={search} alt="search" className="nav-icon"/>
            </IconButton>
            <IconButton aria-label="account of current user" >
              <img src={account} alt="account" className="nav-icon" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
