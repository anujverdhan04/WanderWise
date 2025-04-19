

const users = JSON.parse(localStorage.getItem('users')) || []
const userEmailToEdit = JSON.parse(localStorage.getItem('User To Edit')) || []


const updateButton = document.querySelector('.update')
const cancelButton = document.querySelector('.cancel')

// finding user is present or not in database
const email = users.filter(user => user.email == userEmailToEdit)


// Form input values

const updateName = document.querySelector('.form_name')
updateName.value = email[0].fullName


const updateEmail = document.querySelector('.form_email')
updateEmail.value = email[0].email 
updateEmail.readOnly = true


const updateNumber = document.querySelector('.form_number1')
updateNumber.value = email[0].contact


const updateAltNumber = document.querySelector('.form_altnumber')
updateAltNumber.value = email[0].altNumber


const updateAddress = document.querySelector('.form_address')
updateAddress.value = email[0].address


const updatePassword = document.querySelector('.form_password')
updatePassword.value = email[0].password



// event for update button

updateButton.addEventListener('click' , (e) =>{

    e.preventDefault()
    const userIndex = users.findIndex(user => user.email === email[0].email)
    console.log(userIndex)

if (updateName.value != email[0].fullName || 
    updateNumber.value != email[0].contact || 
    updateAltNumber.value != email[0].altNumber ||
     updateAddress.value != email[0].address || 
     updatePassword.value != email[0].password)
     {
        users[userIndex].fullName = updateName.value;
        users[userIndex].contact = updateNumber.value;
        users[userIndex].altNumber = updateAltNumber.value;
        users[userIndex].address = updateAddress.value;
        users[userIndex].password = updatePassword.value;
        localStorage.setItem("users", JSON.stringify(users));

        alert("User updated successfully");
         window.location.href="admin.html"

    } 
    else {
        alert("No changes detected");
        window.location.href="admin.html"
    }

})


// event for cancle button
cancelButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "admin.html"
})




 









