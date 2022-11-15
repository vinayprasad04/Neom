import React from "react";
import {Link} from "react-router-dom";
const EventCart = ({ item }) => {
  const { img, rank, rating, date, title, desc, vibeicon, vibetext, heartIcon, showCancelFavorite} = item;
  return (
    <div className="card__item">
      <Link className={"card__link"} to={`/eventdetails/10005`} >
        <div className="card__thumb">
          {heartIcon &&
          (<button className="card__fav"><span className="icon-heart"></span></button>
          )}
          {showCancelFavorite && <button className="card__remove">Remove</button>}
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
            <div className="vibes">
              {vibetext && (
                  <img
                      src={process.env.PUBLIC_URL + "./../img/" + vibeicon}
                      alt="Overwhelmed"
                      className="vibes__icon"
                  />
              )}
              {vibetext &&
              (<span className="vibes__text">{vibetext}</span>
              )}
              {rating && (
                  <div className="card__rating"><span className="icon-star"></span>{rating}</div>
              )}
            </div>
            <div className="card__date">{date}</div>
          </div>
          <div className="card__title">{title}</div>
          <div className="card__price">{/*{desc}*/}10:30AM - 7:30PM</div>
        </div>
      </Link>
    </div>
  );
};

export default EventCart;
