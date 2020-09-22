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
export const resetPassword = async (email) => {
  let res = await backendAxios
    .post("Helper/ResetPassword", {
      email: email,
    })
    .then((res) => {
      return res.data.message;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};