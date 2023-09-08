import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App