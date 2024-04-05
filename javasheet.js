function validateForm() {
    const form = document.getElementById("contactform");
    const button = document.getElementById("contactbutton");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let phonenumber = document.getElementById("phoneNumber").value;
        let emailaddress = document.getElementById("emailaddress").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let errorMessage = "";
        let continues = true;
        
        if(name=="" || phonenumber=="" || emailaddress=="" ||subject=="" || message=="") {  //if any of the fields are empty
            error.style.backgroundColor = "#8B0000";
            errorMessage +="please fill in all fields"
            continues = false;
        }
        else if(continues == true && !emailaddress.endsWith("@dal.ca")) {  //email must end with dal.ca
            errorMessage += "Email must be from Dalhousie"
            continues = false;
        }
        else if(continues == true && phonenumber.length <10) {  //check if the phone numnber is valid
            errorMessage += "Enter valid phone number"
            continues = false;
        }
        else  {  //send a notfication if message is valid and submitted
            alert("message submitted")
        }
        error.innerHTML = errorMessage;
    })
}

validateForm();

function changeDarkLightTheme() {  //change the class of the body of contact to change the background color
    const buttonn = document.getElementById("backgroundtheme");
    const bodycontact = document.getElementById("bodycontactid");
    const contactinformation = document.getElementById("contactinformation");
    const theme = document.getElementById("theme");
        bodycontact.classList.toggle("bodycontactlight");
}

function changeBlueTheme() {  //change the class of the body of contact to change the background color to blue
    const bodycontact = document.getElementById("bodycontactid");
        bodycontact.classList.toggle("bodycontactblue");

}



