import axios from "axios";

const addToCart = async (category: string, id: string) => {
    const url = `/api/menu/${category}/${id}`;
    return await axios.get(url);
};

export const userServices = {
    addToCart
};
