import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    historyList: [],
    inputTitle: '',
    inputAmount: '',
    selectType: 'Income',
    balence: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onSelectType = event => {
    if (event.target.value === 'EXPENSES') {
      this.setState({selectType: 'Expenses'})
    } else if (event.target.value === 'INCOME') {
      this.setState({selectType: 'Income'})
    }
  }

  submitDetails = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, selectType, balence} = this.state
    const historyItem = {
      id: uuidv4(),
      inputTitle,
      inputAmount,
      selectType,
    }
    if (selectType === 'Income') {
      const incomeMoney = parseInt(inputAmount)
      this.setState(prevState => ({
        historyList: [...prevState.historyList, historyItem],
        inputTitle: '',
        inputAmount: '',
        selectType: 'Income',
        income: prevState.income + incomeMoney,
        balence: prevState.balence + incomeMoney,
      }))
    } else {
      const incomeMoney = parseInt(inputAmount)
      if (balence >= incomeMoney) {
        this.setState(prevState => ({
          historyList: [...prevState.historyList, historyItem],
          inputTitle: '',
          inputAmount: '',
          selectType: 'Income',
          balence: prevState.balence - incomeMoney,
          expenses: prevState.expenses + incomeMoney,
        }))
      }
    }
  }

  deleteListHistory = (id, inputAmount, selectType) => {
    const {historyList} = this.state
    const filterdHistoryList = historyList.filter(each => each.id !== id)
    if (selectType === 'Income') {
      this.setState(prevState => ({
        historyList: filterdHistoryList,
        balence: prevState.balence - parseInt(inputAmount),
        income: prevState.income - parseInt(inputAmount),
      }))
    } else {
      this.setState(prevState => ({
        historyList: filterdHistoryList,
        balence: prevState.balence + parseInt(inputAmount),
        expenses: prevState.expenses - parseInt(inputAmount),
      }))
    }
  }

  render() {
    const {
      inputTitle,
      inputAmount,
      balence,
      income,
      expenses,
      historyList,
      selectType,
    } = this.state
    return (
      <div className="container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your{' '}
            <span className="welcom-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balence={balence} income={income} expenses={expenses} />
        <div>
          <form
            className="add-transaction-container"
            onSubmit={this.submitDetails}
          >
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="input"
              id="title"
              onChange={this.onChangeTitle}
              value={inputTitle}
              placeholder="TITLE"
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="input"
              id="amount"
              onChange={this.onChangeAmount}
              value={inputAmount}
              placeholder="AMOUNT"
            />
            <label className="label" htmlFor="select">
              TYPE
            </label>
            <select
              className="select"
              id="select"
              onChange={this.onSelectType}
              type="select"
            >
              {transactionTypeOptions.map(each => (
                <option
                  className="option"
                  value={each.optionId}
                  key={each.optionId}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="add-transaction-heading">History</h1>
            <div className="table-heading-container">
              <p className="table-title-heading">Title</p>
              <p className="table-amount-heading">Amount</p>
              <p className="table-type-heading">Type</p>
              <p className="table-delete-btn"> </p>
            </div>
            <ul className="history-List">
              {historyList.map(eachItem => (
                <TransactionItem
                  eachHistory={eachItem}
                  deleteListHistory={this.deleteListHistory}
                  key={eachItem.id}
                  selectType={selectType}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
