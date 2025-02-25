/* eslint-disable react/prop-types */
import css from './TransactionHistory.module.css'
import clsx from 'clsx'


const TransactionHistory = ({ items }) => {
    return (
<table className={clsx(css.table)}>
  <thead>
    <tr>
      <th className={clsx(css.pixel, css.headerPixel)}>Type</th>
      <th className={clsx(css.pixel, css.headerPixel)}>Amount</th>
      <th className={clsx(css.pixel, css.headerPixel)}>Currency</th>
    </tr>
  </thead>
            <tbody>{items.map(({ type, amount, currency, id}, index) => {
                return (
                <tr key={id} className={clsx(index % 2 && css.rowBackgroundColor)}>
                    <td className={clsx(css.pixel)}>{type}</td>
                    <td className={clsx(css.pixel)}>{amount}</td>
                    <td className={clsx(css.pixel)}>{currency}</td>
                </tr>
                )
})}
        </tbody>
</table>
)
}

export default TransactionHistory;