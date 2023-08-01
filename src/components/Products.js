import React, { Component } from "react";
import Product from "./Product"; //product component
import lstProducts from "../shared/ListOfProducts"; //API gia su

export default class Products extends Component {
    
    render(){

        return(
        <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
            {
                lstProducts.map(p=>(
                    //you can note value key change by Dongbh
                    <Product key={p.id.toString()} product ={p}/>
                ))
            }
            </div>
        </div>
            
        )
    }
   
}