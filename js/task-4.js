const form = document.querySelector('.login-form');

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault()
    const elements = event.target.elements;
    elements.email.value.trim();
    elements.password.value.trim();
    if (elements.email.value === "" || elements.password.value === "") {
        alert("All form fields must be filled in");
        return
    }


    const info = {
        email: elements.email.value,
        password: elements.password.value
    };
    console.log(info);
    event.target.reset();
    
    
}