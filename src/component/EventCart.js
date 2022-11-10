import React from 'react';
const EventCart = ({item}) =>{
    console.log("item",item);
    const {img, rank, rating, date, title, desc } = item;
    return(
        <div className="card__item">
            <a href="#" className="card__link">
                <div className="card__thumb">
                    <button className="card__fav"><span className="icon-heart"></span></button>
                    <img src={process.env.PUBLIC_URL +"./img/"+img} alt="event name" className="card__img" />
                    {rank &&
                        <span className="card__count">
                              <img src={process.env.PUBLIC_URL + "./img/"+ rank} alt="Top ranking 1"/>
                        </span>
                    }
                </div>
                <div className="card__info">
                    <div className="card__row">
                        <div className="card__rating"><span className="icon-star"></span>{rating}</div>
                        <div className="card__date">{date}</div>
                    </div>
                    <div className="card__title">{title}</div>
                    <div className="card__price">{desc}</div>
                </div>
            </a>
        </div>
    )
}

export default EventCart;
