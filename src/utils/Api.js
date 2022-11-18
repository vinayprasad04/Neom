import {
  EVENT_API_URL,
  YOUR_CHOICE_API_URL,
  RECOMMENDATIONS_API_URL,
  ATTEND_API_URL,
} from "./Constant.js";
export const getEventList = async () =>
  fetch(EVENT_API_URL).then((data) => {
    return data.json();
  });
export const getYourChoiceList = async () =>
  fetch(YOUR_CHOICE_API_URL).then((data) => {
    return data.json();
  });
export const getRecommendationsList = async () =>
  fetch(RECOMMENDATIONS_API_URL).then((data) => {
    return data.json();
  });
export const getAttendedEvent = async () =>
  fetch(ATTEND_API_URL).then((data) => {
    return data.json();
  });
