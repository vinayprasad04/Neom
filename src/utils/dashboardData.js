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
        {img:"cusine_0.png", title:'Indulge in the Finest Epicurean Cuisines', date:"on Nov 17, 2022", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {img:"surfing.jpg", title:'Surfing at leisure', date:"on Nov 17, 2022", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {img:"Product1.png", title:'Dive into Exciting Island Holiday Experiences', date:"on Nov 17, 2022", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {img:"rolce.png", title:'Indulge in the Finest Epicurean Cuisines', date:"on Nov 17, 2022", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        {img:"holiday_0.png", title:'Indulge in the Finest Epicurean Cuisines', date:"on Nov 17, 2022", desc:"Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as agoodwill gesture. Would you like to accept our request?"},
        /*{img:"", rank:"", rating:"", date:"", title:"", desc:""},*/
    ]
    },
    RecommendationsCard:{
      heading: "Today's recommendations for you, Charlie!",
      Treading : [
        {img:"golf.jpg","Event_ID": 10005, heartIcon:true, vibetext:'Invigorating & Uplifting', vibeicon:'overwhelmed.svg', rank:"one.svg",  date:"Nov 10-29", title:"Round of Golf", desc:"AED 1800 per person"},
        {img:"surfing.jpg","Event_ID": 10006,heartIcon:true,  vibetext:'Active & Energizing', vibeicon:'joy.svg', rank:"two.svg",  date:"Nov 10-29", title:"Surfing", desc:"AED 1800 per person"},
        {img:"yacht.jpg","Event_ID": 10007, heartIcon:true, vibetext:'Vibrant & Social', vibeicon:'joy.svg', rank:"three.svg",  date:"Nov 10-29", title:"Jazz Music", desc:"AED 1800 per person"},
        {img:"dive.jpg","Event_ID": 10008, heartIcon:true,  vibetext:'Glamorous & Grand', vibeicon:'overwhelmed.svg', rank:"four.svg",  date:"Nov 10-29", title:"Sweet Wonderland", desc:"AED 1800 per person"},
        {img:"beach.jpg","Event_ID": 10009 ,heartIcon:true,  vibetext:'Active & Energizing',  vibeicon:'overwhelmed.svg', rank:"five.svg",  date:"Nov 10-29", title:"Kite Surfing", desc:"AED 1800 per person"},
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
          img: "trending1.jpg",
          rank: "one.svg",
          rating: " 4.9 (123 reviews)",
          date: "Nov 10-29",
          title: "Men's Golf League",
          desc: "AED 1800 per person",
        },
        {
          img: "recommend2.jpg",
          rank: "two.svg",
          rating: " 4.9 (123 reviews)",
          date: "Nov 10-29",
          title: "Men's Golf League",
          desc: "AED 1800 per person",
        },
        {
          img: "trending2.jpg",
          rank: "three.svg",
          rating: " 4.9 (123 reviews)",
          date: "Nov 10-29",
          title: "Men's Golf League",
          desc: "AED 1800 per person",
        },
        {
          img: "trending1.jpg",
          rank: "four.svg",
          rating: " 4.9 (123 reviews)",
          date: "Nov 10-29",
          title: "Men's Golf League",
          desc: "AED 1800 per person",
        },
        {
          img: "recommend2.jpg",
          rank: "five.svg",
          rating: " 4.9 (123 reviews)",
          date: "Nov 10-29",
          title: "Men's Golf League",
          desc: "AED 1800 per person",
        },
        /*{img:"", rank:"", rating:"", date:"", title:"", desc:""},*/
      ],
    },

  };
};
export default data;
