import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import { Provider } from 'react-redux'
import store from './store/store'
import './styles/global.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
