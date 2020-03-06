import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'

function createRootElement() {
  const rootEl = document.createElement('div')
  rootEl.classList.add('app')
  document.body.append(rootEl)
  return rootEl
}

const rootElement = createRootElement()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
