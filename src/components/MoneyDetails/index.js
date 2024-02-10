// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balence, income, expenses} = props
  return (
    <ul className="ul-MoneyDetails">
      <li className="your-balence-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div>
          <p className="balence-paragraph">Your Balance</p>
          <p className="money-paragraph" data-testid="balanceAmount">
            Rs {balence}
          </p>
        </div>
      </li>
      <li className="your-Income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div>
          <p className="balence-paragraph">Your Income</p>
          <p className="money-paragraph" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="your-Expenses-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div>
          <p className="balence-paragraph">Your Expenses</p>
          <p className="money-paragraph" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
