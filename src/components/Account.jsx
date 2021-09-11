import account from '../datas/account.json';
import '../css/Account.css';

export default function Account() {
  function currencyFormatEUR(num) {
    return `
      ${num > 0 ? '+' : ''}
      ${
        num
          .toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
      }
    `;
  }

  function dateFormat(date) {
    let formatedDate = date.split('-');
    return (formatedDate = `${
      formatedDate[2] + '/' + formatedDate[1] + '/' + formatedDate[0]
    }`);
  }

  return (
    <div className="account">
      <h2>Mon compte</h2>

      <h3 className="balance">
        {currencyFormatEUR(account.reduce((a, b) => a + b.amount, 0))}
      </h3>

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
                <td className="date">{dateFormat(line.date)}</td>
                <td className="amount">
                  <div className={line.amount > 0 ? 'value positive' : 'value'}>
                    {currencyFormatEUR(line.amount)}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
