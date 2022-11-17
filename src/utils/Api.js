import { EVENT_API_URL } from "./Constant.js";
export const getEventList = async () =>
  fetch(EVENT_API_URL).then((data) => {
    return data.json();
  });
