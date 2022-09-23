import React from "react";
import {getRating} from "../helpers/getRating";

const ProductBox = (props) => {
    return(
        <div className="product-box-wrapper">
            <div>
                <img />
                <h4>{ props.itemName }</h4>
                <div>{getRating( props.itemRating, props.itemRatingAmount )}</div>
                <h2>{props.itemPrice} PLN</h2>
            </div>
        </div>
    )
}
export default ProductBox;