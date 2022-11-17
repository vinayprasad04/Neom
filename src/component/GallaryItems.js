import React from "react";
// import golf from './../assets/img/golf.jpg';
import LightBoxSlider from "./LightBoxSlider";
import { EventDetail,  } from "../MockData.js";
const GallaryItems = (props) =>{
    const { imagesGallery ,status } = props;
    console.log(imagesGallery, "item callled");
    const totalItem = imagesGallery.imgurl.length

    return(
    <div className="eventDetails__grid">
      
              <div className="eventDetails__grid--col grid__box">
                {imagesGallery.imgurl.map((item, index) => {
                  
                  console.log(item, "item")
                  return (
                    totalItem > index + 1  && <div className="grid__box--sm" key={index}>
                      <img
                        src={process.env.PUBLIC_URL + "./../img/" + item?.img}
                        alt=""
                        className="grid__image border__rounded--topLeft"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="eventDetails__grid--col">
                <img
                  src={process.env.PUBLIC_URL + "./../img/" + imagesGallery?.imgurl[totalItem-1].img}
                  alt=""
                  className="grid__image border__rounded--topRight border__rounded--bottomRight"
                />
              </div>
              <div className={`status ${(status=="Over"||status=="Completed") ?"completed":(status=="cancelled")?"cancelled":"scheduled"}`}>{status}</div>
              <LightBoxSlider imagesGallery={imagesGallery}/>
            </div>
    )
}
export default GallaryItems;
