import backendAxios from "../services/backendAxios";

export const getProfileData = async () => {
  let res = await backendAxios
    .get("Helper")
    .then((res) => {
      return res.data.payload;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const updateProfileData = async (
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  gender,
  dateofBirth,
  profilePic
) => {
  let formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("mobile", phoneNumber);
  formData.append("email", emailAddress);
  formData.append("birthDate", dateofBirth);
  if (!profilePic.uri.includes('amazonaws.com')) {
    let photo = {
      uri: profilePic.uri,
      type: "image/jpeg",
      name: profilePic.name,
    };
    formData.append("profilePicture", photo);
  }

  formData.append("gender", gender);

  let res = await backendAxios
    .patch("Helper", formData)
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

export const updateProfessionData = async (
  frontID,
  backID,
  certificate,
  category,
  skills,
) => {
  
  let formData = new FormData();
  formData.append("category", category);
  formData.append("skills", skills);
  if (!frontID.uri.includes('amazonaws.com')) {
    let photo = {
      uri: frontID.uri,
      type: "image/jpeg",
      name: frontID.name,
    };
    formData.append("frontID", photo);
  }
  if (!backID.uri.includes('amazonaws.com')) {
    let photo = {
      uri: backID.uri,
      type: "image/jpeg",
      name: backID.name,
    };
    formData.append("backID", photo);
  } 
  if (!certificate.uri.includes('amazonaws.com')) {
    let photo = {
      uri: certificate.uri,
      type: "image/jpeg",
      name: certificate.name,
    };
    formData.append("certificate", photo);
  }
  let res = await backendAxios
    .patch("Helper", formData)
    .then((res) => {
      return res.data.messege;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};
