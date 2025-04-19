// function fn(tagName, attributes, textContent, parentElement) {


//     const element = document.createElement(tagName)
//     if (attributes) {
//         for (let key in attributes) {
//             element.setAttribute(key, attributes[key])
//         }

//     }
//     if (textContent) {
//         element.textContent = textContent
//     }
//     if (parentElement) {
//         parentElement.append(element)
//     }
//     return element

// }

// const links = fn('p', { id: ".links", href: "../pages/index.html" }, null, submit_button)
// console.log(submit_button)
// registrationForm.addEventListener('submit', links)


const registrationForm = document.querySelector("form")
const submit_button = document.querySelector('.submit')
const users = JSON.parse(localStorage.getItem("users")) || []
const admin= JSON.parse(localStorage.getItem("Admins")) || []


registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fullName = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contact = document.querySelector('#contactNumber').value.trim();
    const altNumber = document.querySelector('#altNumber').value.trim();
    const address = document.querySelector('#address').value.trim();
    const age = document.querySelector('#age').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#cnfPassword').value.trim();

    const emailRegx = /([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const contactRegx = /(\+)?(91)?( )?[7896]\d{9}/
    const altNumberRegx = /(\+)?(91)?( )?[7896]\d{9}/

    const name_error = document.querySelector('.name_error');
    const email_error = document.querySelector('.email_error');
    const number_error = document.querySelector('.number_error');
    const altnumber_error = document.querySelector('.altnumber_error');
    const validPassword = document.querySelector('.password_error');
    const cnfValidPassword = document.querySelector('.cnfPassword_error');

    name_error.textContent = ""
    email_error.textContent = ""
    number_error.textContent = ""
    altnumber_error.textContent = ""
    validPassword.textContent = ""
    cnfValidPassword.textContent = ""

    let isValid = true

    if (!emailRegx.test(email)) {
        email_error.textContent = "Email is not valid"
        isValid = false
        // if(email)
    }
    if (users.some(user => user.email === email) && admin.some(admins => admins.email === email)) {
        email_error.textContent = "Email is already taken"
        isValid = false
    }

    if (!passwordRegx.test(password)) {
        validPassword.textContent = "Password must be 8-12 alphanumeric characters";
        isValid = false
    }
    if (password !== confirmPassword) {
        cnfValidPassword.textContent = "Passwords do not match";
        isValid = false;
    }


    if (!contactRegx.test(contact)) {
        number_error.textContent = "Please enter a valid number"
        isValid = false
    }
    if (users.some(user => user.contact === contact) && users.some(user => user.contact ===altNumber) && admin.some(user => user.contact ===altNumber)&& admin.some(user => user.contact ===contact)) {
        number_error.textContent = "Number already exist,please check"
        isValid = false
    }

    if (!altNumberRegx.test(altNumber)) {
        altnumber_error.textContent = "Please enter a valid number"
        isValid = false
    }
    if(email.endsWith(".admin@WanderWise.com")){
        alert("Admin Registered")
        const adminData = { fullName, email, contact, altNumber, address, age, password }
        admin.push(adminData)
        localStorage.setItem("Admins", JSON.stringify(admin))
        registrationForm.reset()
        window.location ="../pages/login.html"
        // return
        isValid = false
    }
    

    if (isValid) {
        const formData = { fullName, email, contact, altNumber, address, age, password, booking:[] }
        users.push(formData)
        localStorage.setItem("users", JSON.stringify(users))
        registrationForm.reset()
        window.location ="../pages/login.html"

    }




})

const login = document.querySelector('.login')
login.addEventListener('click', (e=>{
    window.location.href='../pages/login.html'
}))

