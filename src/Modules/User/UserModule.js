import {PhotoInfo} from '../GlobalModels'
export class SignInUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
export class SignUpUser {
    constructor(firstName = '', lastName = '', email = '', phoneNumber = '', password = '', confirmPassword = '', frontID = new PhotoInfo(), backID = new PhotoInfo(), certificates = new PhotoInfo(), personalPhoto = new PhotoInfo(), categories ='', skills = '') {
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.frontID = frontID;
        this.backID = backID;
        this.certificates = certificates;
        this.personalPhoto = personalPhoto;
        this.categories = categories;
        this.skills = skills;

    }
}