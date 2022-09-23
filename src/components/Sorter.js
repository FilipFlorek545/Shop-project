import {sortProductsByPrice} from "../helpers/sorter/sortProductsByPrice";
import {sortProductsByRating} from "../helpers/sorter/sortProductsByRating";
import {useState} from "react";


const Sorter = (props) => {
    let list = props.dataProducts
    const [sortPriceOrder, setSortPriceOrder] = useState(false)
    const [sortRatingOrder, setSortRatingOrder] = useState(false)

    const handleChange = event => {
        switch (event.target.value){
            case '0':
                setSortPriceOrder(false)
                break;
            case '1':
                setSortPriceOrder(true)
                break;
            case '2':
                setSortRatingOrder(false)
                break;
            case '3':
                setSortRatingOrder(true)
                break;
        }
    }

    let pulledListData = props.func

    return(
        <div className="sorter-wrapper">
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Sort by price</label>
                    <select onChange={handleChange}>
                        <option value={0}>Lowest to highest</option>
                        <option value={1}>Highest to lowest</option>
                    </select>
                    <button onClick={() => sortProductsByPrice(list, pulledListData, sortPriceOrder)}>Sort</button>
            </form>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Sort by rating</label>
                    <select onChange={handleChange}>
                        <option value={2}>Lowest to highest</option>
                        <option value={3}>Highest to lowest</option>
                    </select>
                <button onClick={() => sortProductsByRating(list, pulledListData, sortRatingOrder)}>Sort</button>
            </form>
        </div>
    )
}

export default Sorter;