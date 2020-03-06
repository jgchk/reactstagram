import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import createStore from './store'
import App from './containers/App'
import { dev } from './config'

function createRootElement() {
  const rootEl = document.createElement('div')
  rootEl.classList.add('app')
  document.body.append(rootEl)
  return rootEl
}

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppComponent />
  </Provider>
)

const store = createStore()
const rootElement = createRootElement()
const renderApp = () => {
  ReactDOM.render(wrapApp(App, store), rootElement)
}

if (dev && module.hot) {
  module.hot.accept('./containers/App', renderApp)
}

renderApp()
