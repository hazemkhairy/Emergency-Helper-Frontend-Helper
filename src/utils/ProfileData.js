import backendAxios from "../services/backendAxios";

export const getProfileData = async () => {
    let res = await backendAxios
        .get("Helper")
        .then((res) => {
            return res.data.payload
        })
        .catch((error) => {
            return error;
        });
    return res;
};