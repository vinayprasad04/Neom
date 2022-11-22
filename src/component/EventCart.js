import React, {useState} from "react";
import {Link} from "react-router-dom";
const EventCart = ({ item, setEventData, onRemoveItem }) => {
  const { Event_Img, Event_Rank, Overall_Event_Rating, Event_Start_Date, Event_Name, Event_Description, Event_Vibe_Icon, Event_Vibe, heartIcon, showCancelFavorite,favorites_Id,Event_ID=10005} = item;
  const [heartAdd, setHeartAdd] = useState(false);
  const onHeartClick = ()=>{
      setHeartAdd(!heartAdd);
  }
  return (
    <div className="card__item">
        <div className="card__thumb">
          {heartIcon && (<button className="card__fav" onClick={onHeartClick}><span className="icon-heart" style={{color:heartAdd ?"red":""}}></span></button>)}
          {showCancelFavorite && <button className="card__remove" onClick={(e)=>onRemoveItem(e, favorites_Id)}>Remove</button>}
          <Link className={"card__link"} to={`/eventdetails/${Event_ID}`} >
              <img
                  src={process.env.PUBLIC_URL + "./../img/" + Event_Img}
                  alt="event name"
                  className="card__img"
              />
              {Event_Rank && (
                  <span className="card__count">
                    <img src={process.env.PUBLIC_URL + "./../img/" + Event_Rank} alt="Top ranking 1"/>
                  </span>
              )}
          </Link>
        </div>
        <div className="card__info">
          <div className="card__row">
            <div className="vibes">
              {Event_Vibe_Icon && (
                  <img
                      src={process.env.PUBLIC_URL + "./../img/" + Event_Vibe_Icon}
                      alt="Overwhelmed"
                      className="vibes__icon"
                  />
              )}
              {Event_Vibe &&
              (<span className="vibes__text">{Event_Vibe}</span>
              )}
              {Overall_Event_Rating && (
                  <div className="card__rating"><span className="icon-star"></span>{Overall_Event_Rating}</div>
              )}
            </div>
            <div className="card__date">{Event_Start_Date}</div>
          </div>
          <div className="card__title">{Event_Name}</div>
          <div className="card__price">{/*{desc}*/}10:30AM - 7:30PM</div>
        </div>

    </div>
  );
};

export default EventCart;
