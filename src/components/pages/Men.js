import ProductBox from "../ProductBox";
import Sorter from "../Sorter";
import {useState} from "react";

const Men = (props) => {
    let list = props.dataProducts
    const [sortOrder, setSortOrder] = useState(false)

    const pullListData = (data) => {
        list = data
        setSortOrder(!sortOrder)
    }

    if(!list){
        return (
            <div>Loading...</div>
        )
    }
    if(list){
        return (
            <>
                <div className="product-section-wrapper">
                    <Sorter func={pullListData} dataProducts={list} />
                    <h2 className="product-section-header">Men</h2>
                    <div className="product-section">
                        <div>
                            {list.map(item => <div key={item.id}>
                                <ProductBox itemName={item.item} itemPrice={item.price} itemRating={item.rating} itemRatingAmount={item.ratingAmount} />
                            </div>)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Men;