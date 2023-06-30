// Published URL  ==>  https://samplerouting.ccbp.tech

import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="container">
    <ul className="components-container">
      <li>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </li>
    </ul>
  </div>
)

export default App
