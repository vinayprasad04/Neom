import React from 'react';

const Map = () =>{
    return(
        <>
            <div className="onmap">
                <div className="container">
                    <div className="onmap__title">Find events on map</div>
                    <div className="onmap__map">
                        <img src={process.env.PUBLIC_URL + "./img/map.jpg"} alt="event" />
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="about__title">About Unified Guests</div>
                    <div className="about__txt">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Map;
