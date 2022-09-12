import axios from "axios";

export const ListQRCode = async () => {
  try {
    const { data: response } = await axios.get(
      `https://bottlear.herokuapp.com/api/qrcode`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ListBoisson = async () => {
  try {
    const { data: response } = await axios.get(
      `https://bottlear.herokuapp.com/api/bottle`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
