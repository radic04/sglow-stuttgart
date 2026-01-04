function submitForm()
{
    let fname = document.getElementById("fname");
    let review = document.getElementById("review");
    let email = document.getElementById("email")

    if(fname.value == "" || review.value == "" || email.value == "")
    {
        alert("Please fill out all mandatory (*) fields!")
    }
    else
    {
        fname.value = "";
        email.value = "";
        review.value = "";
        alert("Form has been submitted!");
    }
}