import axios from "axios";

export async function getMeetList() {
  try {
    const data = await axios.get(`https://port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/travel/`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
