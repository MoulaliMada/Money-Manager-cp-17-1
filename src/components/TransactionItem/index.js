// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachHistory, deleteListHistory} = props
  const {inputTitle, inputAmount, selectType, id} = eachHistory

  const onClickDeleteButton = () => {
    deleteListHistory(id, inputAmount, selectType)
  }

  return (
    <li className="list-Item">
      <p className="table-title">{inputTitle}</p>
      <p className="table-amount">{inputAmount}</p>
      <p className="table-type">{selectType}</p>
      <button
        className="delete-btn"
        onClick={onClickDeleteButton}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-btn-img"
          onClick={onClickDeleteButton}
        />
      </button>
    </li>
  )
}
export default TransactionItem
