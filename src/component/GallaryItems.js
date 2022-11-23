import React from "react";
import LightBoxSlider from "./LightBoxSlider";
const GallaryItems = (props) =>{
    const { imagesGallery ,status } = props;
    const totalItem = imagesGallery.imgurl.length
    return(
    <div className="eventDetails__grid">
              <div className="eventDetails__grid--col grid__box">
                {imagesGallery.imgurl.slice(0,4).map((item, index) => {
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
