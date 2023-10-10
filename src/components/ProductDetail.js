import React, { Component } from "react";
import styleCommon from "../common/styles";
import lstProducts from "../shared/ListOfProducts";
import { useParams } from "react-router-dom";

/*
    Yêu cầu: làm thế nào mỗi lần gọi một routing có tham số /detail/2. Vậy trong component bắt được tham số động này.
    =: phép gán
    ==: phép so sánh nhưng chỉ so sánh về mặt giá trị. Ví dụ: '5' vs 5 => bằng nhau
    ===: bằng "chặt", có nghĩa là trùng cả về giá trị và kiểu dữ liệu. Ví dụ: 5=5,'5'='5', ('5'= 5 => false)

    Note: Ham parseInt: convert string sang number. Vi du: '1' => 1
*/

export default function ProductDetail(){
    const productId = useParams();//lay gia tri sau tham so. Vi du: localhost:3000/detail/1
    const product = lstProducts.find(p=>{
        return p.id  === parseInt(productId.id,10); 
    });

    console.log(product);
    const images = require.context('../assets/images',true);

    return (
        <>
         {
          /*Page Header Begin */}
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: styleCommon.detailProduct.minHeight300}}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href="">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop Detail</p>
                    </div>
                </div>
            </div>
             {/*Page Header End */}
            {/*Shop Detail Start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                               {
                                product.detail.coverImg.map(
                                    (p,i)=>{
                                        const img = images(p);
                                        if(i===0){  
                                            return(
                                                <div className="carousel-item active" key={i.toLocaleString()}>
                                                    <img className="w-100 h-100" src={img} alt="A Description T-Shirt"/>
                                                </div>  
                                            )
                                        }else{
                                            
                                            return (
                                                <div className="carousel-item" key={i.toLocaleString()} >
                                                    <img className="w-100 h-100" src={img} alt="A Description T-Shirt"/>
                                                </div> 
                                            )

                                        }
                                    }
                                   
                                )
                               }        
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
           
             {/*Shop Detail End */}

        </>
    )

}
