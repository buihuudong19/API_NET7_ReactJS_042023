import React, { Component } from 'react'
import lstProducts from '../shared/ListOfProducts';
import Products from './Products';

export default class PopularProduct extends Component{
    constructor(){
        super();
        this.state = {
            products: lstProducts
        };
    }
    render(){
        return (<Products products = {this.state.products}/>);
    }

}