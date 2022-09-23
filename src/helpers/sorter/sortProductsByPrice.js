
export function sortProductsByPrice(list, pulledListData, sortPriceOrder) {
    if(sortPriceOrder === true){
        list = list.sort(({price:a}, {price:b}) => b-a)
    }
    else{
        list = list.sort(({price:a}, {price:b}) => a-b)
    }
    pulledListData(list)
    return list;
}