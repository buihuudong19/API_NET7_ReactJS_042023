//create by function component
import styleCommon from "../common/styles";
const Product = (props) => {
    //props is a object Product in the context
    const { numOfProduct, shortTitle, imgOfProduct, price, discount} = props.product;
    const priceDiscount = Math.round(price - (price * discount/100)); 
    const images = require.context('../assets/images', true);
    const img = images(imgOfProduct);
    //Nhận hàm setProduct truyền từ bên ngoài vào. 
    const setProduct = props.setProduct;
   
    return (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={img} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{shortTitle}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${priceDiscount}.00</h6><h6 className="text-muted ml-2"><del>${price}.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <button onClick={
                            ()=>{setProduct({...props.product, imgOfProduct:img});}} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i><a href="#popup1" id="openPopup">View Detail</a></button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
               
            </div>       
    );
  }
  export default Product