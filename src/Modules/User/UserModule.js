export class SignInUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
export class SignUpUser{
    constructor(firstName,lastName,email,mobileNumber,password,confirmPassword,frontID,backID,certificates,personalPhoto,categories,skills){
        this.firstName=firstName;
        this.lastName=lastName
        this.email=email;
        this.mobileNumber=mobileNumber;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.frontID=frontID;
        this.backID=backID;
        this.certificates=certificates;
        this.personalPhoto=personalPhoto;
        this.categories=categories;
        this.skills=skills;
        
    }
}