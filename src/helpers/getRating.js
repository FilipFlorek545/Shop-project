export function getRating(itemRating, itemRatingAmount) {
    itemRating = parseInt(itemRating, 10)

    let star = '✩'
    let fullStar = '✬'

    let starRating = fullStar.repeat(itemRating)

    if(itemRating < 5){
        let emptyStars = 5 - itemRating;
        return (
            <span>{starRating + star.repeat(emptyStars)} <a href="#">{' (' + itemRatingAmount + ')'}</a></span>
        )
    }

    return(
        <span>{fullStar.repeat(itemRating)} <a href="#">{' (' + itemRatingAmount + ')'}</a></span>
    )
}

