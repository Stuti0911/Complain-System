import ApiError from "./ApiError.js";

const checkPassword = (password) => {
    if(password.length < 8){
        throw new ApiError(400, "Password should be atleast of length 8")
    }
    let smallCharacter = false;
    let capitalCharacter = false;
    let number = false;
    let specialCharacter = false;

    for (let index = 0; index < password.length; index++) {
        const element = password[index];

        if(element >= 'a' && element <= 'z'){
            smallCharacter = true;
        }
        else if(element >= 'A' && element <= 'Z'){
            capitalCharacter = true;
        }
        else if(element >= '0' && element <= '9'){
            number = true;
        }
        else{
            specialCharacter = true;
        } 
    }

    if(!smallCharacter){
        throw new ApiError(400, "Password should contain atleast one small alphabet")
    }
    if(!capitalCharacter){
        throw new ApiError(400, "Password should contain atleast one capital alphabet")
    }
    if(!number){
        throw new ApiError(400, "Password should contain atleast one digit")
    }
    if(!specialCharacter){
        throw new ApiError(400, "Password should contain atleast one special character")
    }

    return true;
}

const checkRollNo =  (rollNo) => {
    let regex = /^[1-9]\d(ucs|ucc|uec|ume|dec|dcs|pmt|pph|pme|pcs)\d{3}$/;

    if(! regex.test(rollNo)){
        return false;
    }

    if(rollNo[5] == 0 && rollNo[6] == 0 && rollNo[7] == 0) return false;
    return true;
    
}

const checkEmail = (email) => {
    let regex = /@lnmiit\.ac\.in$/;
    return regex.test(email);
}

const isSameEmailRollNo = (email,rollNo) => {
    let ind = 0;
    for (let index = 0; index < rollNo.length; index++) {
        if(rollNo[index]!=email[ind]) return false;
        ind++;
    }
    return true;
}

const isDigitsOnly = (phoneNo) => {
    let regex = /^\d+$/  // Regular expression to check if the string contains only digits
    return regex.test(phoneNo)
}

const checkIfStudentEmail = (email) => {
    let regex =  /^[1-9]\d(ucs|ucc|uec|ume|dec|dcs|pmt|pph|pme|pcs)\d{3}@lnmiit\.ac\.in$/;

    return regex.test(email);
}

export{
    checkPassword,
    checkRollNo,
    checkEmail,
    isSameEmailRollNo,
    isDigitsOnly,
    checkIfStudentEmail
}