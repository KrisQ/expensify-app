import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css'

const ExpenseDashboardPage = () => <div>This my dashboard component</div>
const AddExpensePage = () => <div>This my add expense component</div>
const EditExpensePage = () => <div>This my edit expense component</div>
const HelpPage = () => <div>This my Help component</div>
const notFoundPage = () => <h1>🤬 404!</h1>

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={notFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
