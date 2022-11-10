import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingValue = ({initialValue, readOnly= false}) =>{
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <Rating onClick={handleRating} initialValue={initialValue?initialValue:rating} size={18} readonly={readOnly} />
    )
}
export default RatingValue;
