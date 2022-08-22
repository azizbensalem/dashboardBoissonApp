import axios from "axios";

export const ListQRCode = async () => {
  try {
    const { data: response } = await axios.get(
      `http://localhost:3000/api/qrcode`
    ); //use data destructuring to get data from the promise object
    return response;
  } catch (error) {
    console.log(error);
  }
};
