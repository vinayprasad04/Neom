import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingValue = ({initialValue, readOnly= false, fillColor="#ffbc0b", size=18, onClick}) =>{
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <Rating fillColor={fillColor} onClick={onClick? onClick:handleRating} initialValue={initialValue?initialValue:rating} size={size} readonly={readOnly} />
    )
}
export default RatingValue;
