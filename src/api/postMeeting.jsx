import axios from "axios";
export async function postMeeting(meet) {
  console.log("meet:", meet);
  try {
    const data = await axios.post(`https://port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/travel/`, meet);
    console.log("api:", data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
