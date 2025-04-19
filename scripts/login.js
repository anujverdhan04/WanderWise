

const login = document.querySelector('.login')
const registers = document.querySelector('.submit')
const data = JSON.parse(localStorage.getItem("users")) || []



registers.addEventListener('click', (e) => {
    window.location.href = '../pages/register.html'
})

// for admins 

const userLogin = JSON.parse(localStorage.getItem('Current user')) || []
const adminFlag = JSON.parse(localStorage.getItem('Flag')) || []
const users = JSON.parse(localStorage.getItem('users')) || []
// const admins = JSON.parse(localStorage.getItem("Admins")) ||[]



let Flag = false;

// adminFlag.push(Flag)
// localStorage.setItem('Flag' , JSON.stringify(adminFlag))



const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('.form_email').value.trim()
    const password = document.querySelector('.form_password').value.trim()


    const email_error = document.querySelector('.email_error');
    const password_error = document.querySelector('.password_error')

    email_error.textContent = ""
    password_error.textContent = ""

    let isValid = true

    const data = JSON.parse(localStorage.getItem("users")) || []
    const user = data.find(user => user.email === email)



    const adminsDb = JSON.parse(localStorage.getItem("Admins")) || []
    const admin = adminsDb.find(admin => admin.email === email)




    // working on admin login section 

    if (!email) {
        email_error.textContent = "Please enter email"
        isValid = false
    }

    else if (!user && !admin) {
        email_error.textContent = "Email not found! Please Register"
        isValid = false
    }

    else {
        if (admin) {
            if (password !== admin.password) {
                password_error.textContent = "Wrong Password";
                isValid = false;
            } else {
                isValid = true;
            }
        }
        else if (user) {
            if (password !== user.password) {
                password_error.textContent = "Wrong Password";
                isValid = false;
            } else {
                isValid = true;
            }
        }
        if (isValid) {
            if (admin) {
                adminFlag.pop();
                Flag = true;
                adminFlag.push(Flag);
                localStorage.setItem('Flag', JSON.stringify(adminFlag));
                alert("Admin Logged in");
                window.location.href = "../pages/index.html";
            } 
            else {
                alert("User Logged in");
                window.location.href = "../pages/index.html";
    
                adminFlag.pop();
                Flag = false;
                adminFlag.push(Flag);
                localStorage.setItem('Flag', JSON.stringify(adminFlag));
    
                const findingUsers = users.find(findingUsers => findingUsers.email === email);
    
                if (findingUsers) {
                    const userFullName = findingUsers.fullName;
                    const userEmail = findingUsers.email;
                    const userContact = findingUsers.contact;
    
                    const alreadyLoggedIn = userLogin.find(userlog => userlog.userEmail === userEmail);
    
                    if (!alreadyLoggedIn) {
                        const whoLoggedIn = { userFullName, userEmail, userContact };
                        localStorage.setItem('Current User', JSON.stringify(whoLoggedIn));
                    }
                }
            }
        }
    }

   
    console.log(isValid)
    loginForm.reset()

})
