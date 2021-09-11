import '../css/NavBar.css';
import { Button } from '@material-ui/core';
import {
  AccountBalanceWalletOutlined,
  AssessmentOutlined,
  PresentToAllOutlined,
} from '@material-ui/icons';

export default function NavBar() {
  return (
    <nav id="navbar">
      <ul>
        <li className="navbar-item">
          <Button startIcon={<AccountBalanceWalletOutlined />}>
            Mon compte
          </Button>
        </li>
        <li className="navbar-item">
          <Button startIcon={<PresentToAllOutlined />}>Virement</Button>
        </li>
        <li className="navbar-item">
          <Button startIcon={<AssessmentOutlined />}>Statistiques</Button>
        </li>
      </ul>
    </nav>
  );
}
