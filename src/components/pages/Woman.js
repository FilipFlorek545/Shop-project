import ProductBox from "../ProductBox";
import Sorter from "../Sorter";
import {useState} from "react";

const Woman = (props) => {
    let list = props.dataProducts
    const [sortOrder, setSortOrder] = useState(0)

    const pullListData = (data) => {
        list = data
        setSortOrder(sortOrder + 1)
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
                    <h2 className="product-section-header">Woman</h2>
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
export default Woman;