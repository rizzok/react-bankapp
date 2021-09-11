import '../css/Header.css';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
  return (
    <header>
      {/* <img src="https://via.placeholder.com/120x40" alt="logo" /> */}
      <div>
        <h1 id="title">Bankapp</h1>
        <p className="slogan">A new way to spend money 💸</p>
      </div>
      <div className="nav">
        <IconButton>
          <AccountCircleIcon style={{ fontSize: 35 }} />
        </IconButton>
      </div>
    </header>
  );
}
