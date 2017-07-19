import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Product from './components/Product/Product'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product/:id" component={Product1} />
            <Route exact path="/product" component={Product} />
         </Switch>
      </div>
    )
  }
}

export default App;

function Home () {
   return (
      <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
           fugiat nulla pariatur. Excepteur sint occaecat c
           upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
           laborum.</p>
      </div>
   )
}


function About () {
   return (
      <h1>About</h1>
   )
}
function Product1(props){
  console.log(props.match.params.id)
  return(
    <div>
      <h1>Item 1</h1>
    </div>
  )
}
