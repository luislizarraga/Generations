import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App'
import MainComponent from './components/MainComponent'
import FirstUserStoryComponent from './components/first_user_story/FirstUserStoryComponent'
import SecondUserStoryComponent from './components/second_user_story/SecondUserStoryComponent'
import ThirdUserStoryComponent from './components/third_user_story/ThirdUserStoryComponent'
// import VisibleProductsContainer from './containers/products/VisibleProductsContainer'
// import VisibleProductDetail from './containers/products/VisibleProductDetail'
// import VisibleClientsContainer from './containers/clients/VisibleClientsContainer'
// import VisibleClientDetailContainer from './containers/clients/VisibleClientDetailContainer'
// import VisibleSuppliersContainer from './containers/suppliers/VisibleSuppliersContainer'
// import VisibleSupplierDetailContainer from './containers/suppliers/VisibleSupplierDetailContainer'
// import VisibleInvoicesContainer from './containers/invoices/VisibleInvoicesContainer'
// import VisibleQuotesContainer from './containers/quotes/VisibleQuotesContainer'
// import VisibleInvoiceNewForm from './containers/invoices/VisibleInvoiceNewForm'


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainComponent} />
      <Route path='first' component={FirstUserStoryComponent} />
      <Route path='second' component={SecondUserStoryComponent} />
      <Route path='third' component={ThirdUserStoryComponent} />
    </Route>
  </Router>
)