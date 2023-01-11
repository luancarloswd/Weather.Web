import axios from "axios";

export const searchWeather = async (postalCode) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${apiUrl}/weather/${postalCode}`);
    return response.data;
}