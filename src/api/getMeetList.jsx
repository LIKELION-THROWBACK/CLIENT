import axios from "axios";

export async function getMeetList() {
  try {
    const data = await axios.get(`http://127.0.0.1:8000/api/travel`);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
