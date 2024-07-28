const { default: axiosClient } = require("./axiosClient");

const createOrder = (data: any) => axiosClient.post("/orders", data);

export default {
    createOrder,
};