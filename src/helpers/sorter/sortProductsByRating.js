
export function sortProductsByRating(list, pulledListData, sortRatingOrder) {
    if(sortRatingOrder === true){
        list = list.sort(({rating:a}, {rating:b}) => b-a)
    }
    else{
        list = list.sort(({rating:a}, {rating:b}) => a-b)
    }
    pulledListData(list)
    return list;
}