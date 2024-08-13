


function generatePassword(){

    const length = document.getElementById("passLength").value;
    const includeLower = document.getElementById("lowerCheck").checked;
    const includeUpper = document.getElementById("upperCheck").checked;
    const includeNumbers = document.getElementById("numberCheck").checked;
    const includeSymbols = document.getElementById("specialCharCheck").checked; 

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = lowerChars.toUpperCase();
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? lowerChars : "";
    allowedChars += includeUpper ? upperChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0 || length > 40){
        window.alert(`Password length must be at least 1 and less than 40!`);
        return;
    }
       
    if(allowedChars.length === 0){
        window.alert(`At least one set of characters must be selected!`); 
        return;
    }
           

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);       
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").textContent = password;   
    
}
        


