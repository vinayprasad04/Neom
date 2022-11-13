import React from "react";
const GallaryItems = (props) =>{
    const { PhotoGallary } = props;
    return(
    <div class="eventDetails__grid">
              <div class="eventDetails__grid--col grid__box">
                {PhotoGallary.map((item, index) => {
                  console.log(item, "gallery item")
                  return (
                    <div class="grid__box--sm" key={index}>
                      <img
                        src={process.env.PUBLIC_URL + "./img/" + item.img}
                        alt=""
                        class="grid__image border__rounded--topLeft"
                      />
                    </div>
                  );
                })}
              </div>
              <div class="eventDetails__grid--col">
                <img
                  src={process.env.PUBLIC_URL + "./img/Image119.jpg"}
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