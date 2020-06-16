import backendAxios from "../services/backendAxios";

export const changePassword = async (
  oldPassword,
  newPassword,
) => {

  let res = await backendAxios
    .patch("Account/ChangePassword", { oldPassword: oldPassword, newPassword: newPassword })
    .then((res) => {
      return res.data.message;
    })
    .catch((error) => {
      return error.response;

    });
  return res;
};
