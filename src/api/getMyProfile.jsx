import axios from "axios";
export async function getMyProfile(userId) {
  try {
    const data = await axios.get(`https://port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/user/${userId}/`);

    return data.data;
  } catch (error) {
    console.log(error);
  }
}
