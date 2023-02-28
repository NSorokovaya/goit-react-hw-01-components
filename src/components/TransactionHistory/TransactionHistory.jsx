import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
       return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return (
            <tr key={el.id}>
              <td className={css.td}>{el.type}</td>
              <td className={css.td}>{el.amount}</td>
              <td className={css.td}>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};