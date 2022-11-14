import React from "react";
import Image119 from './../assets/img/Image119.jpg';
const GallaryItems = (props) =>{
    const { imagesGallery } = props;
    return(
    <div class="eventDetails__grid">
              <div class="eventDetails__grid--col grid__box">
                {imagesGallery.map((item, index) => {
                  console.log(item, "gallery item")
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
              <div class="status scheduled">Scheduled</div>
              <button class="btn__white">Show all</button>
            </div>
    )
}
export default GallaryItems;
