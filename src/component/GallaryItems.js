import React from "react";
// import golf from './../assets/img/golf.jpg';
import LightBoxSlider from "./LightBoxSlider";
import { DashboardEventDetail,  } from "../MockData.js";

const GallaryItems = (props) =>{
    const { imagesGallery ,status } = props;
    return(
    <div className="eventDetails__grid">
              <div className="eventDetails__grid--col grid__box">
                {imagesGallery.map((item, index) => {
                  console.log(item, "callled")
                  return (
                    <div className="grid__box--sm" key={index}>
                      <img
                        src={process.env.PUBLIC_URL + "./../img/" + item?.imgurl.img}
                        alt=""
                        className="grid__image border__rounded--topLeft"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="eventDetails__grid--col">
                <img
                  src={process.env.PUBLIC_URL + "./../img/golf.jpg"}
                  alt=""
                  className="grid__image border__rounded--topRight border__rounded--bottomRight"
                />
              </div>
              <div className={`status ${(status=="Over"||status=="Completed") ?"completed":(status=="cancelled")?"cancelled":"scheduled"}`}>{status}</div>
              <LightBoxSlider imagesGallery={DashboardEventDetail}/>
            </div>
    )
}
export default GallaryItems;
