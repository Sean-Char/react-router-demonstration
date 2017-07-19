import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'


export default class Nav extends Component {

    render() {
        return (
          <nav className="Nav">
            <div className="Nav-header">
               <div className="Nav-title">Sean's App</div>
            </div>
            <ul className="Nav-navlist">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/product">Product</Link></li>
            </ul>
          </nav>

        )
    }
}
