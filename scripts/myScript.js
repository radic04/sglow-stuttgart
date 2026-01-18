const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function submitForm()
{
    let fname = document.getElementById("fname")
    let review = document.getElementById("review")
    let email = document.getElementById("email")

    if(fname.value == "" || review.value == "" || email.value == "")
    {
        alert("Please fill out all mandatory (*) fields!")
    }
    else if(!validateEmail(email.value)){
        alert("Email should be written in the correct format, e.g. email@domain.com")
    }
    else
    {
        fname.value = "";
        email.value = "";
        review.value = "";
        alert("Form has been submitted!");
    }
}