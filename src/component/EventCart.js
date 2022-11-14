import React from "react";
const EventCart = ({ item }) => {
  console.log("item", item);
  const { img, rank, rating, date, title, desc, vibeicon, vibetext, heartIcon} = item;
  return (
    <div className="card__item">
      <a href="#" className="card__link">
        <div className="card__thumb">
        {heartIcon &&
        ( <button class="card__fav"><span class="icon-heart"></span></button>
        )}
          <img
            src={process.env.PUBLIC_URL + "./../img/" + img}
            alt="event name"
            className="card__img"
          />
          {rank && (
            <span className="card__count">
              <img
                src={process.env.PUBLIC_URL + "./../img/" + rank}
                alt="Top ranking 1"
              />
            </span>
          )}
        </div>
        <div className="card__info">
          <div className="card__row">
            <div class="vibes">
            {vibetext &&(
              <img
                src={process.env.PUBLIC_URL + "./../img/" + vibeicon}
                alt="Overwhelmed"
                class="vibes__icon"
              />
            )}
               {vibetext &&
               ( <span class="vibes__text">{vibetext}</span>
               )}
                {rating && (
              <div className="card__rating"><span className="icon-star"></span>{rating}</div>
                )}
            </div>
            <div class="card__date">{date}</div>
          </div>
          <div className="card__title">{title}</div>
          <div className="card__price">{desc}</div>
        </div>
      </a>
    </div>
  );
};

export default EventCart;
