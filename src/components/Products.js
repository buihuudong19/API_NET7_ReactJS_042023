import React, { Component } from "react";
import Product from "./Product";
import {useState} from 'react'
//functional component to demo about presentational component
const Products = (props) => {
    const lstProducts = props.products;
    //Sử dụng useState để khởi tạo biến product ban đầu = {}
    const [product, setProduct] = useState({});
    console.log(product);
    return (
        
        <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {
                        lstProducts.map(p=>(
                            //you can note value key change by Dongbh. Đoạn này truyền hàm setProduct vào component Product
                            <Product key={p.id.toString()} product ={p} setProduct={setProduct}/>

                        ))
                    }
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <img src={product.imgOfProduct} alt=""/>
                            <h2>{product.shortTitle}</h2>
                            <a className="close" href="#">&times;</a>
                            <div className="content">{product.info}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
}
export default Products;


/*
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
*/