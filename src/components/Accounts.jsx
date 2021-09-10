import account from '../datas/account.json';
import '../css/Accounts.css';

export default function Accounts() {
  return (
    <div className="accounts">
      <h2>Mes comptes</h2>

      <h3 className="balance">{account.reduce((a, b) => a + b.amount, 0)} €</h3>

      <table className="account-history">
        <thead>
          <tr>
            <th className="description">Description</th>
            <th className="date">Date</th>
            <th className="amount">Montant</th>
          </tr>
        </thead>
        <tbody>
          {account.map((line) => {
            return (
              <tr key={line.id}>
                <td className="description">{line.description}</td>
                <td className="date">{line.date}</td>
                <td className="amount">{line.amount} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
