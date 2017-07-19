import React,{Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom'

export default class Product extends Component {

    render() {
        return (
            <div className="class-name">
                <h1>Product</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                <div>
                  <ul>
                    <li><Link to="/product/1">Products</Link></li>
                  </ul>
                </div>
            </div>
        )
    }
}
