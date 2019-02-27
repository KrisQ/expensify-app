import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { General } from './components/styles/General'
import 'normalize.css/normalize.css'

const ExpenseDashboardPage = () => <div>This my dashboard component</div>
const AddExpensePage = () => <div>This my add expense component</div>
const EditExpensePage = () => <div>This my edit expense component</div>
const HelpPage = () => <div>This my Help component</div>
const notFoundPage = () => (
  <h1>
    🤬 404! - <Link to="/">Home</Link>
  </h1>
)
const Header = () => (
  <header>
    <h1>Expensify 🤑</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <General>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </General>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
