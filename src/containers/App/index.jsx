import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'focus-outline-manager'

import Home from '../pages/Home'
import Post from '../pages/Post'

import '../../../res/styles/reset.less'
import styles from './styles.module.less'
import './styles.less'

const App = () => (
  <div className={styles.base}>
    <Router>
      <Switch>
        <Route path='/p/:id' component={Post} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </div>
)

export default App
