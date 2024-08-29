import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async (limit = 10, skip = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: { limit, skip },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
