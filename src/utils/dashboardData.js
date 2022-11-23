const data = () => {
  return {
    SliderCardData:{
      heading: "Good morningCharlie",
      SliderCard: [
        {Event_ID:10001,img:"spa_0.png", rank:"one.svg", city:"Sindalah Island", game:"Golf",  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Men's Golf League", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…"},
        {Event_ID:10002,img:"recommend2.jpg", rank:"two.svg", city:"Sindalah Island", game:"Golf",  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Men's Golf League", desc:"Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…"},
        {Event_ID:10003,img:"trending2.jpg", rank:"three.svg", city:"Sindalah Island", game:"Golf",  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Men's Golf League", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…"},
        {Event_ID:10004,img:"trending1.jpg", rank:"four.svg", city:"Sindalah Island", game:"Golf",  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Men's Golf League", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {Event_ID:10005, img:"recommend2.jpg", rank:"five.svg", city:"Sindalah Island", game:"Golf",  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Men's Golf League", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod dolore magna aliquyam erat…"},
        /*{img:"", rank:"", rating:"", date:"", title:"", desc:""},*/
    ]
    },
    YourChoice:{
      heading: "Charlie, hope we understand you better",
      SliderCard: [
        {Event_Img:"cusine_0.png", Event_Name:'Indulge in the Finest Epicurean Cuisines', Event_Start_Date:"on Nov 17, 2022", Event_Description:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {Event_Img:"surfing.jpg", Event_Name:'Surfing at leisure', Event_Start_Date:"on Nov 17, 2022", Event_Description:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {Event_Img:"Product1.png", Event_Name:'Dive into Exciting Island Holiday Experiences', Event_Start_Date:"on Nov 17, 2022", Event_Description:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {Event_Img:"rolce.png", Event_Name:'Indulge in the Finest Epicurean Cuisines', Event_Start_Date:"on Nov 17, 2022", Event_Description:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {Event_Img:"holiday_0.png", Event_Name:'Indulge in the Finest Epicurean Cuisines', Event_Start_Date:"on Nov 17, 2022", Event_Description:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        /*{Event_Img:"", Event_Rank:"", rating:"", Event_Start_Date:"", Event_Name:"", Event_Description:""},*/
    ]
    },
    RecommendationsCard:{
      heading: "Today's recommendations for you, Charlie!",
      Treading : [
        {Event_Img:"golf.jpg","Event_ID": 10005, heartIcon:true, Event_Vibe:'Invigorating & Uplifting', Event_Vibe_Icon:'overwhelmed.svg', Event_Rank:"one.svg",  Event_Start_Date:"Nov 10-29", Event_Name:"Round of Golf", Event_Description:"AED 1800 per person"},
        {Event_Img:"surfing.jpg","Event_ID": 10006,heartIcon:true,  Event_Vibe:'Active & Energizing', Event_Vibe_Icon:'joy.svg', Event_Rank:"two.svg",  Event_Start_Date:"Nov 10-29", Event_Name:"Surfing", Event_Description:"AED 1800 per person"},
        {Event_Img:"yacht.jpg","Event_ID": 10007, heartIcon:true, Event_Vibe:'Vibrant & Social', Event_Vibe_Icon:'joy.svg', Event_Rank:"three.svg",  Event_Start_Date:"Nov 10-29", Event_Name:"Jazz Music", Event_Description:"AED 1800 per person"},
        {Event_Img:"dive.jpg","Event_ID": 10008, heartIcon:true,  Event_Vibe:'Glamorous & Grand', Event_Vibe_Icon:'overwhelmed.svg', Event_Rank:"four.svg",  Event_Start_Date:"Nov 10-29", Event_Name:"Sweet Wonderland", Event_Description:"AED 1800 per person"},
        {Event_Img:"beach.jpg","Event_ID": 10009 ,heartIcon:true,  Event_Vibe:'Active & Energizing',  Event_Vibe_Icon:'overwhelmed.svg', Event_Rank:"five.svg",  Event_Start_Date:"Nov 10-29", Event_Name:"Kite Surfing", Event_Description:"AED 1800 per person"},
    ]
    },
    AttendEventCard:{
      heading: "Charlie, here is your master journey with us so far",
      Treading : [
        {img:"golf.jpg", Event_ID: 10010, rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Round of Golf", desc:"AED 1800 per person"},
        {img:"surfing.jpg", Event_ID: 10011, rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Surfing", desc:"AED 1800 per person"},
        {img:"yacht.jpg",Event_ID: 10012,  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Jazz Music", desc:"AED 1800 per person"},
        {img:"dive.jpg", Event_ID: 10013,  rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Sweet Wonderland", desc:"AED 1800 per person"},
        {img:"beach.jpg",Event_ID: 10014, rating:" 4.9 (123 reviews)", date:"Nov 10-29", title:"Kite Surfing", desc:"AED 1800 per person"},
      ]
    },
    CartInfoSlider: {
      heading: "Top 5 activities on this island today",
      slidesPerView: 4,
      Treading: [
        {
          Event_Img: "trending1.jpg",
          Event_Rank: "one.svg",
          Overall_Event_Rating:4.9, 
          Event_Review:"(123 reviews)",
          Event_Start_Date: "Nov 10-29",
          Event_Name: "Men's Golf League",
          Event_Description: "AED 1800 per person",
        },
        {
          Event_Img: "recommend2.jpg",
          Event_Rank: "two.svg",
          Overall_Event_Rating:4.9, 
          Event_Review:"(123 reviews)",
          Event_Start_Date: "Nov 10-29",
          Event_Name: "Men's Golf League",
          Event_Description: "AED 1800 per person",
        },
        {
          Event_Img: "trending2.jpg",
          Event_Rank: "three.svg",
          Overall_Event_Rating:4.9, 
          Event_Review:"(123 reviews)",
          Event_Start_Date: "Nov 10-29",
          Event_Name: "Men's Golf League",
          Event_Description: "AED 1800 per person",
        },
        {
          Event_Img: "trending1.jpg",
          Event_Rank: "four.svg",
          Overall_Event_Rating:4.9, 
          Event_Review:"(123 reviews)",
          Event_Start_Date: "Nov 10-29",
          Event_Name: "Men's Golf League",
          Event_Description: "AED 1800 per person",
        },
        {
          Event_Img: "recommend2.jpg",
          Event_Rank: "five.svg",
          Overall_Event_Rating:4.9, 
          Event_Review:"(123 reviews)",
          Event_Start_Date: "Nov 10-29",
          Event_Name: "Men's Golf League",
          Event_Description: "AED 1800 per person",
        },
        /*{Event_Img:"", Event_Rank:"", Overall_Event_Rating:"", Event_Start_Date:"", title:"", desc:""},*/
      ],
    },

  };
};
export default data;
