import React from "react";
import Image119 from './../assets/img/Image119.jpg';
import LightBoxSlider from "./LightBoxSlider";

const GallaryItems = (props) =>{
    const { imagesGallery ,status } = props;
    return(
    <div class="eventDetails__grid">
              <div class="eventDetails__grid--col grid__box">
                {imagesGallery.map((item, index) => {
                  return (
                    <div class="grid__box--sm" key={index}>
                      <img
                        src={item}
                        alt=""
                        class="grid__image border__rounded--topLeft"
                      />
                    </div>
                  );
                })}
              </div>
              <div class="eventDetails__grid--col">
                <img
                  src={Image119}
                  alt=""
                  class="grid__image border__rounded--topRight border__rounded--bottomRight"
                />
              </div>
              <div class={`status ${(status=="Over") ?"completed":(status=="cancelled")?"cancelled":"scheduled"}`}>{status}</div>
              <LightBoxSlider imagesGallery={imagesGallery}/>
            </div>
    )
}
export default GallaryItems;
