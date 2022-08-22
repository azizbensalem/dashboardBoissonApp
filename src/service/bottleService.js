import axios from "axios";

export const ListQRCode = async () => {
  try {
    const { data: response } = await axios.get(
      `https://bottlear.herokuapp.com/api/qrcode`
    ); //use data destructuring to get data from the promise object
    return response;
  } catch (error) {
    console.log(error);
  }
};
