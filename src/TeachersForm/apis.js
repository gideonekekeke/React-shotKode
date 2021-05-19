import axios from "axios";

// const apiUrl = "https://my24test.herokuapp.com/api/";
const apiUrl = "https://teachershot.herokuapp.com/api/";

export const singleFileUpload1 = async (data, options) => {
  try {
    await axios.post(apiUrl + "singleFile", data, options);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles1 = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getSingleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload1 = async (data, options) => {
  try {
    await axios.post(apiUrl + "multipleFiles", data, options);
  } catch (error) {
    throw error;
  }
};
export const getMultipleFiles1 = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getMultipleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};
