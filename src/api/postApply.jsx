import axios from "axios";
export async function postApply(id) {
  console.log("apply:", id);
  try {
    const data = await axios.post(
      `https://port-0-throwback-eu1k2lllcfh9do.sel3.cloudtype.app/api/travel/${id}/add_user/`,
      { id: 6 },
    );
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
